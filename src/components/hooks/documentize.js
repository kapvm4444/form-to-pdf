import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";

export function documentize(patient, doctor = "Dr. ABC") {
  //LABEL
  // Setting the values for table
  const fields = Object.keys(patient);

  const patientInfoBody = fields
    .filter((el) => el !== /diagnosis|treatment|medicine/)
    .map((el) => [
      { content: capitalize(el), style: { fontStyle: "bold" } },
      patient[el],
    ]);

  //visit info body parsed
  const visitInfoBody = [
    [
      { content: `Doctor:`, style: { fontStyle: "bold" } },
      { content: doctor, style: { fontStyle: "normal" } },
      { content: `Visit Date:`, style: { fontStyle: "bold" } },
      {
        content: `${new Date().toLocaleDateString()}`,
        style: { fontStyle: "normal" },
      },
    ],
  ];

  //LABEL
  // creating the page layout (page object)
  const doc = new jsPDF({
    orientation: "portrait",
    format: "b5",
  });

  doc.setFontSize(16);
  //LABEL
  // coordinates
  const centerTitleX =
    (doc.internal.pageSize.width - doc.getTextWidth(`Medical Report`)) / 2;
  const pageIndent = 5;
  const tableUsableArea = doc.internal.pageSize.width - 10;

  //LABEL
  // setting the values

  //=>
  // Head Title
  doc.setFont("Helvetica", "bold");
  doc.text(`Medical Report`, centerTitleX, 10);

  //=>
  // Visit Info
  doc.setFontSize(14);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor("#2D7D59");
  doc.text("Visit Info", pageIndent, 20);

  //=>
  // doctor info and date table
  autoTable(doc, {
    styles: {
      fontSize: 12,
      fillColor: false,
      halign: "center",
      valign: "middle",
    },
    theme: "plain",
    startY: 23,
    margin: { left: 5, right: 5 },
    body: visitInfoBody,
    columnStyles: {
      0: {
        cellWidth: tableUsableArea * 0.15,
        halign: "left",
        fontStyle: "bold",
      },
      1: { cellWidth: tableUsableArea * 0.35, halign: "left" },
      2: {
        cellWidth: tableUsableArea * 0.15,
        halign: "left",
        fontStyle: "bold",
      },
      3: { cellWidth: tableUsableArea * 0.35, halign: "left" },
    },
  });

  //=>
  // Patient info
  //last location
  const lastY = doc.lastAutoTable.finalY;
  doc.setFontSize(14);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor("#2D7D59");
  doc.text("Patient Info", pageIndent, lastY + 10);

  //=>
  // doctor info and date table
  autoTable(doc, {
    styles: {
      fontSize: 12,
      fillColor: false,
      halign: "center",
      valign: "middle",
      minCellHeight: 15,
    },
    theme: "plain",
    startY: lastY + 13,
    margin: { left: 5, right: 5 },
    body: patientInfoBody,
    columnStyles: {
      0: {
        cellWidth: tableUsableArea * 0.2,
        halign: "left",
        fontStyle: "bold",
      },
      1: { cellWidth: tableUsableArea * 0.8, halign: "left" },
    },
  });

  doc.save(`${patient.name}.pdf`);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
