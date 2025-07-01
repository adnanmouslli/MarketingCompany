"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Search,
  CheckCircle,
  XCircle,
  AlertCircle,
  AlertTriangle,
  Server,
  Network,
  Users,
  Database,
  Code,
  Briefcase,
} from "lucide-react";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ServiceCardAdmin from "@/components/services/ServicesCardAdmin";
import { apiClient } from "@/lib/api";
import { useTranslation } from "react-i18next";

interface Category {
  id: string;
  category: string;
  title: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  link: string;
  category: Category;
  published: boolean;
  created_at: string;
  updated_at: string;
}

interface Alert {
  type: "success" | "error" | "info";
  message: string;
}

export default function ServicesPage() {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");
  const [categoryFilter, setCategoryFilter] = useState<string | "all">("all");
  const [alert, setAlert] = useState<Alert | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{
    show: boolean;
    serviceId: number | null;
  }>({ show: false, serviceId: null });

  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await apiClient.get(`/categories`);
      if (response.statusText.toLowerCase() !== "ok")
        throw new Error(t("services.errorFetchCategories"));
      return response.data.categories;
    },
  });

  const { data } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await apiClient.get("/services");
      return response.data.services;
    },
  });

  const showAlert = (type: Alert["type"], message: string) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 3000);
  };

  const initiateDelete = (id: number) => {
    setDeleteConfirm({ show: true, serviceId: id });
  };

  const handleDelete = () => {
    if (deleteConfirm.serviceId !== null) {
      showAlert("success", t("services.alertDeleteSuccess"));
      setDeleteConfirm({ show: false, serviceId: null });
    }
  };

  const filteredServices =
    data &&
    data.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        filter === "all"
          ? true
          : filter === "published"
          ? service.published
          : !service.published;
      const matchesCategory =
        categoryFilter === "all"
          ? true
          : service.category.title === categoryFilter;
      return matchesSearch && matchesStatus && matchesCategory;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1035] to-[#2e3267] p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Alert */}
        <AnimatePresence mode="wait">
          {alert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-2 z-50 ${
                alert.type === "success"
                  ? "bg-green-500"
                  : alert.type === "error"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            >
              {alert.type === "success" && (
                <CheckCircle className="w-5 h-5 text-white" />
              )}
              {alert.type === "error" && (
                <XCircle className="w-5 h-5 text-white" />
              )}
              {alert.type === "info" && (
                <AlertCircle className="w-5 h-5 text-white" />
              )}
              <p className="text-white font-medium">{alert.message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            {t("services.title")}
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="/admin/services/categories"
              className="inline-flex items-center px-4 py-2 bg-[#2e3267] rounded-lg hover:bg-[#2e3267]/80 transition-colors"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              {t("services.categories")}
            </Link>
            <Link
              href="/admin/services/new"
              className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              {t("services.newService")}
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#1a1f4b] rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t("services.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#2e3267] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 bg-[#2e3267] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">{t("services.allCategories")}</option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
              {["all", "published", "draft"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status as typeof filter)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === status
                      ? "bg-blue-600 text-white"
                      : "bg-[#2e3267] text-gray-400 hover:bg-[#363b7e]"
                  }`}
                >
                  {t(`services.filters.${status}`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-wrap gap-10 w-full">
            {filteredServices?.length ? (
              filteredServices.map((service) => (
                <ServiceCardAdmin
                  key={service.id}
                  service={{
                    id: service.id,
                    title: service.title,
                    description: service.description,
                    link: `/services/${service.link}`,
                  }}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-gray-400"
              >
                {t("services.noServicesFound")}
                <br />
                <Link
                  href="/admin/services/new"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4"
                >
                  <Plus className="w-4 h-4" />
                  {t("services.createFirstService")}
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Delete Modal */}
        {deleteConfirm.show && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a1f4b] rounded-xl p-6 max-w-md w-full mx-4 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                <h3 className="text-xl font-semibold text-white">
                  {t("services.deleteConfirmTitle")}
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                {t("services.deleteConfirmText")}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() =>
                    setDeleteConfirm({ show: false, serviceId: null })
                  }
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {t("services.cancel")}
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  {t("services.deleteButton")}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
