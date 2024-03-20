import Link from "next/link";
import { Page } from "@/types/Page";

interface NavigationListProps {
  pages: Page[];
  listClasses?: string;
  listItemClasses?: string;
  onClose?: () => void;
}

const defaultListClasses: string = "flex flex-col justify-center items-center gap-4 pt-20 font-medium";
const defaultListItemClasses: string = "list-none";

const NavigationList = ({
  pages,
  listClasses = defaultListClasses,
  listItemClasses = defaultListItemClasses,
  onClose,
}: NavigationListProps) => {
  return (
    <ul className={listClasses}>
      {/* <li className={listItemClasses}>
        <Link href={`/`} onClick={onClose}>Home</Link>
      </li> */}
      {pages.map((page) => (
        <li key={page._id} className={listItemClasses}>
          <Link href={`/${page.slug}`} className={listItemClasses} onClick={onClose}>
            <p className="text-inherit font-inherit">{page.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavigationList;
