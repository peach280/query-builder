import type { Rule, RuleGroup } from './types';

export function ruleToString(rule: Rule): string {
  return `(${rule.field} ${rule.condition} ${rule.value})`;
}

export function ruleGroupToString(group: RuleGroup): string {
  const childrenStr = group.children.map(child =>
    child.type === 'rule' ? ruleToString(child) : ruleGroupToString(child)
  ).join(` ${group.conjunction} `);

  return childrenStr;
}