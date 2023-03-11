export function classnames(...names: (string | undefined | false | null)[]) {
  return names.filter(Boolean).join(" ");
}

export function getId() {
  return Math.random().toString(36).slice(2, 9);
}
