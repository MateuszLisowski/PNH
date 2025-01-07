export const cx = (
  classes: (string | undefined | Record<string, boolean>)[]
): string =>
  classes
    .flatMap((classProperty) =>
      classProperty instanceof Object
        ? Object.entries(classProperty).map(
            ([key, value]) => Boolean(value) && key
          )
        : classProperty
    )
    .filter(Boolean)
    .join(" ")
    .trim();
