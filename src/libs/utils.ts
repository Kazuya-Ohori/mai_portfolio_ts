import dayjs from 'dayjs';
import 'dayjs/locale/ja'; // これimportしないとエラー吐かれる

export const DateFormat = {
  YY_MM_DD_dd : 'YYYY/MM/DD(dd)',
  YY_MM_DD : 'YYYY/MM/DD',
  YYMMDD : 'YYYY.MM.DD',
  MM_DD_dd : 'MM/DD(dd)',
} as const; // enum型で表示パターンを書いておくと後で楽(jsはenum使えないけど...)

type DateFormat = typeof DateFormat[keyof typeof DateFormat];

export function formatDate(date: Date | string, type: DateFormat): string {
  switch (type) {
    case DateFormat.YY_MM_DD_dd:
      return dayjs(date)
        .locale('ja')
        .format('YYYY/MM/DD(dd)');
    case DateFormat.YY_MM_DD:
      return dayjs(date)
        .locale('ja')
        .format('YYYY/MM/DD');
    case DateFormat.YYMMDD:
      return dayjs(date)
        .locale('ja')
        .format('YYYY.MM.DD');
    case DateFormat.MM_DD_dd:
      return dayjs(date)
        .locale('ja')
        .format('MM/DD(dd)');
    default:
      return dayjs(date)
        .locale('ja')
        .format('YYYY/MM/DD');
  }
};