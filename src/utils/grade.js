export function gradeToInt(grade) {
    const okGrade = "OK";
    const failedGrade = "-";

  if (grade === failedGrade) {
    return 0;
  } else if (grade === okGrade) {
    return 1;
  } else {
    return 1;
  }
}

export function intToGrade(grade) {
  grade = Math.round(grade);
  if (grade < 1.0) {
    return "IG";
  } else if (grade < 2.0) {
    return "G";
  }
}
