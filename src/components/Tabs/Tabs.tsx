import type { FC } from "react";

export type Tab = {
  title: string;
  value: string;
  content: React.ReactNode;
};

export type TabsProps = {
  items: Tab[];
};

export const Tabs: FC<TabsProps> = ({ items }) => {
  const name = useId();
  const [currentTab, setCurrentTab] = useState(items[0].value);

  const currentItem = items.find((tab) => tab.value === currentTab);

  return (
    <div className="tabs">
      <div className="tab-items">
        {items.map((tab) => {
          return (
            <label key={tab.value} className="tab-item">
              <input
                type="radio"
                name={name}
                onChange={() => setCurrentTab(tab.value)}
                checked={tab.value === currentTab}
              />

              {tab.title}
            </label>
          );
        })}
      </div>

      <div>{currentItem?.content}</div>
    </div>
  );
};
