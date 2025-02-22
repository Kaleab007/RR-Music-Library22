import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTFTP: getTTF }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTF(onPerfEntry);
    });
  }
};
reportWebVitals(console.log)
export default reportWebVitals;
