import RuleEditor from './RuleEditor';
import type { Rule, RuleGroup } from './types';

interface Props {
  group: RuleGroup;
  onChange: (newGroup: RuleGroup) => void;
}

export default function RuleGroupEditor({ group, onChange }: Props) {
  function addRule() {
    const newRule: Rule = {
      type: 'rule',
      field: 'Theme',
      condition: 'Equals',
      value: ['Product Feedback'],
    };
    onChange({ ...group, children: [...group.children, newRule] });
  }

  function addGroup() {
    const newGroup: RuleGroup = {
      type: 'rule_group',
      conjunction: 'AND',
      not: false,
      children: [],
    };
    onChange({ ...group, children: [...group.children, newGroup] });
  }

  function handleConjunctionChange(name: 'AND' | 'OR') {
    onChange({ ...group, conjunction: name });
  }

  return (
    <div className="border border-gray-700 rounded p-4 mt-4 space-y-4">
      <div className="flex items-center space-x-2">
        <button
          className={`px-4 py-2 rounded font-bold ${group.conjunction === 'AND' ? 'bg-blue-700' : 'bg-gray-700'}`}
          onClick={() => handleConjunctionChange('AND')}
        >
          AND
        </button>
        <button
          className={`px-4 py-2 rounded font-bold ${group.conjunction === 'OR' ? 'bg-blue-700' : 'bg-gray-700'}`}
          onClick={() => handleConjunctionChange('OR')}
        >
          OR
        </button>
      </div>

     {group.children.map((child, i) => (
  <div key={i} className="ml-4">
    {child.type === 'rule' ? (
      <RuleEditor
        rule={child}
        onChange={(newRule) => {
          const newChildren = group.children.map((c, j) =>
            j === i ? newRule : c
          );
          onChange({ ...group, children: newChildren });
        }}
      />
    ) : (
      <RuleGroupEditor
        group={child}
        onChange={(newChild) => {
          const newChildren = group.children.map((c, j) =>
            j === i ? newChild : c
          );
          onChange({ ...group, children: newChildren });
        }}
      />
    )}
  </div>
))}


      <div className="flex space-x-2">
        <button
          onClick={addRule}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          + Add filter
        </button>
        </div>
        <div className="flex space-x-2">
        <button
          onClick={addGroup}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          + Add group filter
        </button>
      </div>
    </div>
  );
}
