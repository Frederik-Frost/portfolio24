export default class ResponsiveHelper {
  static isMobile() {
    return window.innerWidth < 768;
  }

  static isTablet() {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  }

  static isDesktop() {
    return window.innerWidth >= 1024;
  }

  static isPortrait() {
    return window.innerHeight > window.innerWidth;
  }

  static addTailwindDecorator = (breakpointDef: string, classes: string) => {
    const modifiedClasses: string[] = [];
    const classesArr = classes.split(" ");
    classesArr.forEach((classItem) => {
      modifiedClasses.push(breakpointDef + ":" + classItem);
    });
    return modifiedClasses.join(" ");
  };
}
