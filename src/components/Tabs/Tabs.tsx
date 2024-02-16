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
  const [currentTab, setCurrentTab] = useState("");

  const currentItem = items.find((tab) => tab.value === currentTab);

  return (
    <div>
      {items.map((tab) => {
        return (
          <label key={tab.value}>
            <input
              type="radio"
              name={name}
              onChange={() => setCurrentTab(tab.value)}
            />
            <div className="">{tab.title}</div>
          </label>
        );
      })}

      <div>{currentItem?.content}</div>
    </div>
  );
};
