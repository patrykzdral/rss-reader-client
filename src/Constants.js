// Constants.js
const prod = {
    url: {
        API_URL: 'http://RssReader-env.eba-pmaaqe4p.us-east-1.elasticbeanstalk.com'
    }
};

const dev = {
    url: {
        API_URL: 'http://localhost:8080'
    }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;