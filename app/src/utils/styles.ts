export function classnames(...names: (string | undefined | false | null)[]) {
  return names.filter(Boolean).join(" ");
}
