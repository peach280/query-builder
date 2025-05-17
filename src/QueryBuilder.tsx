import { useEffect, useState } from 'react';
import RuleGroupEditor from './RuleGroupEditor';
import type { RuleGroup } from './types';
import { ruleGroupToString } from './utils';

interface QueryBuilderProps {
  onQueryChange?: (ruleObject: RuleGroup, ruleString: string) => void;
}

export default function QueryBuilder({ onQueryChange }: QueryBuilderProps) {
  const [query, setQuery] = useState<RuleGroup>({
    type: 'rule_group',
    conjunction: 'AND',
    not: false,
    children: [],
  });

  useEffect(() => {
    if (onQueryChange) {
      onQueryChange(query, ruleGroupToString(query));
    }
  }, [query]);

  return (
    <div className="bg-gray-900 p-6 rounded-xl text-white">
      <div className="bg-blue-800 p-4 rounded">
        <h3 className="text-xl font-bold">Build your query</h3>
        <p className="text-sm mt-2 break-words">
          Query: {ruleGroupToString(query) || 'The query you build will be saved in your active view'}
        </p>
      </div>
      <RuleGroupEditor group={query} onChange={setQuery} />
    </div>
  );
}




