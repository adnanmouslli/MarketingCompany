import prisma from "../prisma/client.js";

class ServicesRepository {
  async createService(serviceDTO) {
    try {
      // Extract categoryId and ensure it's an integer
      const categoryId = serviceDTO.categoryId ? parseInt(serviceDTO.categoryId) : null;
      
      if (!categoryId) {
        throw new Error("Category ID is required");
      }

      // Check if category exists with proper integer ID
      const categoryExists = await prisma.categories.findUnique({
        where: { id: categoryId },
      });

      if (!categoryExists) {
        throw new Error("Category does not exist");
      }

      // Check if a service with the same title already exists
      const existingService = await prisma.services.findFirst({
        where: { title: serviceDTO.title },
      });

      if (existingService) {
        throw new Error(`A service with the title "${serviceDTO.title}" already exists. Please use a different title.`);
      }

      // Extract features for separate creation
      const { features, ...data } = serviceDTO;
      
      // Ensure categoryId is properly formatted for Prisma
      const serviceData = {
        ...data,
        categoryId: categoryId
      };

      // Create the service
      const service = await prisma.services.create({
        data: serviceData,
      });

      // Handle features if they exist
      if (features && features.length > 0) {
        const allFeatures = features.map(item => ({
          ...item,
          serviceId: service.id
        }));

        await prisma.feature.createMany({
          data: allFeatures,
        });
      }

      // Fetch the created service with its relationships
      const completeService = await prisma.services.findUnique({
        where: { id: service.id },
        include: {
          category: true,
          features: true
        }
      });

      return completeService;
    } catch (error) {
      // Special handling for unique constraint errors
      if (error.code === 'P2002' && error.meta?.target?.includes('title')) {
        throw new Error(`A service with this title already exists. Please use a different title.`);
      }
      console.error("Error creating service:", error);
      throw error;
    }
  }

  async updateService(id, serviceDTO) {
    if (!id) throw new Error("ID is required for updating a service");

    try {
      const serviceId = parseInt(id);
      if (isNaN(serviceId)) throw new Error("Invalid service ID format");

      // Check if the service exists
      const existingService = await prisma.services.findUnique({
        where: { id: serviceId },
      });

      if (!existingService) {
        throw new Error("Service not found");
      }

      // Check if category exists if categoryId is being updated
      if (serviceDTO.categoryId) {
        const categoryId = parseInt(serviceDTO.categoryId);
        
        const categoryExists = await prisma.categories.findUnique({
          where: { id: categoryId },
        });

        if (!categoryExists) {
          throw new Error("Category does not exist");
        }
      }

      // Check if title is being changed and if a service with the new title already exists
      if (serviceDTO.title && serviceDTO.title !== existingService.title) {
        const titleExists = await prisma.services.findFirst({
          where: {
            title: serviceDTO.title,
            NOT: { id: serviceId } // Exclude the current service
          },
        });

        if (titleExists) {
          throw new Error(`A service with the title "${serviceDTO.title}" already exists. Please use a different title.`);
        }
      }

      return await prisma.services.update({
        where: {
          id: serviceId,
        },
        data: {
          title: serviceDTO.title,
          description: serviceDTO.description,
          servicelink: serviceDTO.servicelink,
          overviewtitle: serviceDTO.overviewtitle,
          overviewcontent: serviceDTO.overviewcontent,
          categoryId: serviceDTO.categoryId
            ? parseInt(serviceDTO.categoryId)
            : undefined,
          status: serviceDTO.status,
          features: {
            deleteMany: {}, // First delete existing features
            create:
              serviceDTO.features?.map((feature) => ({
                title: feature.title,
                description: feature.description,
              })) || [],
          },
        },
        include: {
          features: true, // Include features in the response
          category: true,
        },
      });
    } catch (error) {
      // Special handling for unique constraint errors
      if (error.code === 'P2002' && error.meta?.target?.includes('title')) {
        throw new Error(`A service with this title already exists. Please use a different title.`);
      }
      console.error("Error updating service:", error);
      throw error;
    }
  }

  // The rest of the methods remain the same...
  async getServiceById(id) {
    if (!id) throw new Error("ID is required to fetch a service");

    try {
      const serviceId = parseInt(id);
      if (isNaN(serviceId)) throw new Error("Invalid service ID format");

      const service = await prisma.services.findUnique({
        where: { id: serviceId },
        include: {
          category: true,
          features: true,
        }
      });

      if (!service) {
        throw new Error("Service not found");
      }

      return service;
    } catch (error) {
      console.error("Error getting service by ID:", error);
      throw error;
    }
  }

  async getServiceByName(name) {
    if (!name) throw new Error("Service name is required");

    try {
      const service = await prisma.services.findUnique({
        where: { name },
        include: {
          category: true,
          features: true,
        }
      });

      if (!service) {
        return null;
      }

      return service;
    } catch (error) {
      console.error("Error getting service by name:", error);
      throw error;
    }
  }

  async getServicesByCategory(categoryId) {
    if (!categoryId) throw new Error("Category ID is required");

    try {
      const parsedCategoryId = parseInt(categoryId);
      if (isNaN(parsedCategoryId))
        throw new Error("Invalid category ID format");

      return await prisma.services.findMany({
        where: { categoryId: parsedCategoryId },
        include: {
          features: true,
        },
        orderBy: { title: "asc" },
      });
    } catch (error) {
      console.error("Error getting services by category:", error);
      throw error;
    }
  }

  async getAllServices() {
    try {
      return await prisma.services.findMany({
        include: {
          category: true,
          features: true,
        },
        orderBy: {
          title: "asc",
        },
      });
    } catch (error) {
      console.error("Error getting all services:", error);
      throw error;
    }
  }

  async deleteService(id) {
    if (!id) throw new Error("ID is required to delete a service");

    try {
      const serviceId = parseInt(id);
      if (isNaN(serviceId)) throw new Error("Invalid service ID format");

      // Delete related features first
      await prisma.feature.deleteMany({
        where: { serviceId: serviceId },
      });

      // Then delete the service
      return await prisma.services.delete({
        where: { id: serviceId },
      });
    } catch (error) {
      console.error("Error deleting service:", error);
      throw error;
    }
  }
}

// Create a single instance of the repository
const servicesRepository = new ServicesRepository();

// Export the instance
export { servicesRepository };