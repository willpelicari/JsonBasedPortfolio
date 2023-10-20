import { useContext, useEffect, useState } from "react";
import { Tag } from "./Tag";
import { FilterContext } from "../pages/Home";
import { Entry } from "../@types/CustomTypes";

interface ExperienceEntryProps {
  entry: Entry;
}

export function ExperienceEntry({ entry }: ExperienceEntryProps) {
  const ribbonStyle = entry.ThirdParty?.RibbonBgColor
    ? entry.ThirdParty?.RibbonBgColor + " " + entry.ThirdParty?.RibbonFontColor
    : "bg-green-400";
  const consultingText = entry.ThirdParty?.RibbonDescription
    ? entry.ThirdParty?.RibbonDescription + " "
    : "consulting for ";
  const [showExperience, setShowExperience] = useState(true);

  const filterContext = useContext(FilterContext);
  useEffect(() => {
    if (filterContext.filteredTags.length === 0) {
      setShowExperience(true);
    } else {
      setShowExperience(
        entry.Job.TechStack.map((x) => x.Stack)
          .flat()
          .some((tech) => filterContext.filteredTags.includes(tech))
      );
    }
  }, [filterContext.filteredTags]);

  return (
    <li
      className={`${
        !showExperience && "hidden"
      } md:flex items-center space-x-3 mb-10 bg-white shadow-sm px-4 py-8 rounded`}
    >
      <div className="text-center w-fit mx-auto">
        <a
          href={entry.Company.Link}
          target="_blank"
          aria-label={entry.Company.Name}
        >
          {
            <img
              src={entry.Company.Logo}
              style={{
                width: 150,
                maxWidth: 150,
                minHeight: 150,
                marginRight: 5,
              }}
            />
          }
        </a>
        {entry.ThirdParty && (
          <sup className={`px-1 text-xs block font-semibold ${ribbonStyle}`}>
            {consultingText}
            {
                entry.ThirdParty.Name &&
                <a href={entry.ThirdParty.Link} target="_blank">
                    {entry.ThirdParty.Name}
                </a>
            }
          </sup>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex-col md:flex-row mb-5 flex items-center justify-between space-x-4 mr-4 text-center">
          <h4 className="text-xl md:text-2xl font-semibold">{entry.Job.Title}</h4>
          <span className="text-md md:text-lg whitespace-nowrap">
            {entry.Job.Duration}
          </span>
        </div>
        <div className="mb-5 ">
          {entry.Job.TechStack.map((x) => x.Stack)
            .flat()
            .map((element, key) => (
              <Tag
                key={key}
                value={element}
                bgColor="bg-gray-100"
                hoverColor="bg-blue-200"
              />
            ))}
        </div>
        <div>
          <p>{entry.Job.Description}</p>
        </div>
      </div>
    </li>
  );
}
