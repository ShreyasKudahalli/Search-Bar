import "./SearchResultsList.css";
import { SearchResult } from "./SearchResults";

export default function SearchResultsList({ results }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};