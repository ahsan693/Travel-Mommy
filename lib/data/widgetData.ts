export interface WidgetData {
  dropdowns: string[];
  departure: { label: string; value: string };
  destination: { label: string; placeholder: string };
  departDate: { label: string; value: string };
  returnDate: { label: string; value: string };
  travellers: { label: string; value: string };
  buttonText: string;
  checkboxes: string[];
}

export const widgetData: WidgetData = {
  dropdowns: ["One way", "Bags"],
  departure: { label: "Departure", value: "Dublin (DUB)" },
  destination: { label: "To", placeholder: "Country, City or air..." },
  departDate: { label: "Depart", value: "08 Nov 2025" },
  returnDate: { label: "Return", value: "08 Jan 2026" },
  travellers: { label: "Travellers and Cabin Class", value: "01 Adult 01 Child" },
  buttonText: "Search",
  checkboxes: ["Add Nearby Airports", "Add Nearby Airports", "Direct Flights"],
};