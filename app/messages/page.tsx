"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { useTranslation } from "react-i18next";

interface MessageData {
  id: number;
  name: string;
  email: string;
  message: string;
  subject: string;
  created_at: string | number | Date;
}

// Fetch function
const fetchMessages = async (): Promise<MessageData[]> => {
  const { data } = await apiClient.get("/message/messages"); // Replace with your API endpoint
  return data;
};

const MessagesTable: React.FC = () => {
  const { t } = useTranslation();

  const {
    data: messages,
    isLoading,
    isError,
    error,
  } = useQuery<MessageData[], Error>({
    queryKey: ["messages"],
    queryFn: fetchMessages,
  });

  if (isLoading) {
    return <p className="text-center text-blue-500">{t("loading")}</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        {t("error")}: {(error as Error).message}
      </p>
    );
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-200 shadow-md">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 border border-gray-300">
              {t("table.id")}
            </th>
            <th className="px-4 py-2 border border-gray-300">
              {t("table.name")}
            </th>
            <th className="px-4 py-2 border border-gray-300">
              {t("table.email")}
            </th>
            <th className="px-4 py-2 border border-gray-300">
              {t("table.subject")}
            </th>
            <th className="px-4 py-2 border border-gray-300">
              {t("table.message")}
            </th>
            <th className="px-4 py-2 border border-gray-300">
              {t("table.createdAt")}
            </th>
          </tr>
        </thead>
        <tbody>
          {messages?.map((message: MessageData) => (
            <tr key={message.id} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300 text-center">
                {message.id}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {message.name}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {message.email}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {message.subject}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {message.message}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {new Date(message.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessagesTable;
