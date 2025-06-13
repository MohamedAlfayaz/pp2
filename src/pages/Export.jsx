import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { toast } from "react-toastify";
import { Eye, Trash2 } from "lucide-react";

const Export = ({ data }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [email, setEmail] = useState("");

  const filteredData = data?.filter((item) => {
    if (!startDate || !endDate) return true;
    const date = new Date(item.date);
    return date >= new Date(startDate) && date <= new Date(endDate);
  });

  const exportToExcel = () => {
    toast.success("Excel file exported successfully!");
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
    const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const file = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(file, "report.xlsx");
  };

  const exportToPDF = () => {
    toast.success("PDF file exported successfully!");
    const doc = new jsPDF();
    doc.text("Report Export", 14, 16);
    const tableData = filteredData.map((item, index) => [
      index + 1,
      item.name,
      item.email,
      item.date,
    ]);
    doc.autoTable({
      head: [["#", "Name", "Email", "Date"]],
      body: tableData,
      startY: 20,
    });
    doc.save("report.pdf");
  };

  const sendToEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format.");
      return;
    }

    toast.info(`Sending report to ${email}...`);
    setTimeout(() => {
      toast.success(`Report sent to ${email}`);
      setEmail("");
    }, 1000);
  };

  return (
    <div className="flex p-6 gap-6">
      {/* Left side - Export Panel */}
      <div className="w-1/2 p-4">
        <h2 className="text-2xl  mt-4">Export Options</h2>

        <div className="mb-4 flex gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={exportToExcel}
            className="bg-blue-800 text-white font-medium px-4 py-1 rounded-full"
          >
            Export to Excel
          </button>
          <button
            onClick={exportToPDF}
            className="bg-blue-800 text-white font-medium px-4 py-1 rounded-full"
          >
            Export to PDF
          </button>
        </div>
        <div className="flex flex-col mt-4 gap-3">
          <label className="block text-sm font-medium mb-1">
            Recipient Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            className="border p-2 rounded w-[320px]"
          />
          <button
            onClick={sendToEmail}
            className="bg-blue-800 text-white font-medium px-4 py-1 rounded-full w-[150px]"
          >
            Send to Email
          </button>
        </div>
      </div>

      {/* Right side - Report Preview */}
      <div className="w-1/2 p-4">
        <h2 className="text-xl  my-4">Report Preview</h2>
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border text-center">{index + 1} </td>
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.email}</td>
                  <td className="p-2 border">{item.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2 border text-center">1</td>
                <td className="p-2 border">John Doe</td>
                <td className="p-2 border">xHJdM@example.com</td>
                <td className="p-2 border">2025-06-01</td>
                <td className="p-2 border text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => console.log("View John Doe")}
                      className="text-blue-600 hover:text-blue-800"
                      title="View"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => console.log("Delete John Doe")}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Export;