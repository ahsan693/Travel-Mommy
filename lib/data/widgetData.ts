export interface WidgetField {
  label: string;
  value?: string;
  placeholder?: string;
  icon: string;
}

export interface WidgetCheckbox {
  label: string;
  checked: boolean;
}

export interface WidgetData {
  dropdowns: string[];
  departure: WidgetField;
  destination: WidgetField;
  departDate: WidgetField;
  returnDate: WidgetField;
  travellers: WidgetField;
  buttonText: string;
  checkboxes: WidgetCheckbox[];
  swapIcon: string;
}

export const widgetData: WidgetData = {
  dropdowns: ["One way", "Bags"],
  departure: { 
    label: "Departure", 
    value: "Dublin (DUB)", 
    icon: "/Homepage/Section 1/Header Icons/Icons/plane - 01.png" 
  },
  destination: { 
    label: "To", 
    placeholder: "Country, City or air...", 
    icon: "/Homepage/Section 1/Header Icons/Icons/plane - 03.png" 
  },
  departDate: { 
    label: "Depart", 
    value: "08 Nov 2025", 
    icon: "/Homepage/Section 1/Header Icons/Icons/calendar - 02.png" 
  },
  returnDate: { 
    label: "Return", 
    value: "08Jan 2026", 
    icon: "/Homepage/Section 1/Header Icons/Icons/calendar - 02.png" 
  },
  travellers: { 
    label: "Travellers and Cabin Class", 
    value: "01 Adult 01 Child", 
    icon: "/Homepage/Section 1/Header Icons/Icons/join a group - 01.png" 
  },
  buttonText: "Search",
  checkboxes: [
    { label: "Add Nearby Airports", checked: false },
    { label: "Add Nearby Airports", checked: true },
    { label: "Direct Flights", checked: false }
  ],
  swapIcon: "/Homepage/Section 1/Header Icons/Icons/transfer.png"
};