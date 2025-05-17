
import QueryBuilder from './QueryBuilder';

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white p-6">
      <QueryBuilder
      onQueryChange={(ruleObject, ruleString) => {
      console.log("Rule Object:", ruleObject);
      console.log("Query String:", ruleString);
     }}
    />
     <div className="mt-8 flex justify-between space-x-4">
        <button
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
        >
          ← Back
        </button>
        <button
          className="bg-blue-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Finish →
        </button>
      </div>
  </div>
  );
}
