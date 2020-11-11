const trackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

const analyticsHelper = {
    registerPageView: (page_title) => {
        window.gtag('config', trackingId, {
            page_title,
        });
    },
};

export { analyticsHelper };
