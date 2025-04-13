import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";

export function documentize(patient) {
  const fields = Object.keys(patient);
  const body = fields.map((el) => [el, patient[el]]);

  const doc = new jsPDF({
    orientation: "portrait",
    format: "b5",
  });

  doc.setFontSize(20);
  doc.text(`${patient.name} Health Report`, 10, 10);

  const usableArea = doc.internal.pageSize.width - 10;

  autoTable(doc, {
    startY: 20,
    margin: { left: 5, right: 5 },
    head: [["title", "description"]],
    body,
    columnStyles: {
      0: { cellWidth: usableArea * 0.3 },
      1: { cellWidth: usableArea * 0.7 },
    },
  });

  doc.save(`${patient.name}.pdf`);
}
