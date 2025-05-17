import type { Rule } from './types';
import Options from './Options';

interface Props {
  rule: Rule;
  onChange: (newRule: Rule) => void;
}

export default function RuleEditor({ rule, onChange }: Props) {
  function handleChange(key: keyof Rule, value: string) {
    onChange({ ...rule, [key]: key === 'value' ? [value] : value });
  }

  return (
    <div className="flex gap-6">
  <div className="flex flex-col">
    <label htmlFor="field" className="text-sm mb-1">Field</label>
    <select
      className="bg-gray-800 p-2 rounded text-white w-48"
      value={rule.field}
      onChange={(e) => handleChange('field', e.target.value)}
    >
      {Options.field.map((f) => (
        <option key={f}>{f}</option>
      ))}
    </select>
  </div>

  <div className="flex flex-col">
    <label htmlFor="condition" className="text-sm mb-1">Condition</label>
    <select
      className="bg-gray-800 p-2 rounded text-white w-48"
      value={rule.condition}
      onChange={(e) => handleChange('condition', e.target.value)}
    >
      {Options.condition.map((c) => (
        <option key={c}>{c}</option>
      ))}
    </select>
  </div>

  <div className="flex flex-col">
    <label htmlFor="value" className="text-sm mb-1">Criteria</label>
    <select
      className="bg-gray-800 p-2 rounded text-white w-48"
      value={rule.value?.[0]}
      onChange={(e) => handleChange('value', e.target.value)}
    >
      {Options.value.map((v) => (
        <option key={v}>{v}</option>
      ))}
    </select>
  </div>
</div>

  );
}
