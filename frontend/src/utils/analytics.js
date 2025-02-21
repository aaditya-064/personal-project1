import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-15RHQ44C4Q"; // Replace with your GA ID

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send("pageview");
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
