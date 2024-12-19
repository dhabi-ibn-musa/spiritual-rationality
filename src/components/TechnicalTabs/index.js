import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export { TabItem };

export const vernacular = (label = "Vernacular") => ({
  value: "vernacular",
  label
});

export const technical = (label = "Technical") => ({
  value: "technical",
  label
});

// Change to named export
export const TechnicalTabs = ({ children }) => (
  <Tabs groupId="tech-level" queryString>
    {children}
  </Tabs>
);