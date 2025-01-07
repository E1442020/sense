import i18n from "../../i18n";

export function timeAgo(timestamp: string): string {
  const now = new Date();
  const time = new Date(timestamp);
  const secondsAgo = Math.floor((now.getTime() - time.getTime()) / 1000);

  if (secondsAgo < 60) {
    return secondsAgo === 1
      ? i18n.t("timeAgo.second", { count: 1 })
      : i18n.t("timeAgo.seconds", { count: secondsAgo });
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return minutesAgo === 1
      ? i18n.t("timeAgo.minute", { count: 1 })
      : i18n.t("timeAgo.minutes", { count: minutesAgo });
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return hoursAgo === 1
      ? i18n.t("timeAgo.hour", { count: 1 })
      : i18n.t("timeAgo.hours", { count: hoursAgo });
  } else {
    const daysAgo = Math.floor(secondsAgo / 86400);
    return daysAgo === 1
      ? i18n.t("timeAgo.day", { count: 1 })
      : i18n.t("timeAgo.days", { count: daysAgo });
  }
}
