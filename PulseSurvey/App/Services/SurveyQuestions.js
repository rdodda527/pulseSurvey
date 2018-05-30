import Reactotron from 'reactotron-react-native';

const create = (baseURL) => {


  const saveQuestion = (name,questions,date) => {
    const payload = {
      Questions: questions,
      Name: name,
      Date: date
    };
    const r = new Request(
      `${baseURL}/v1/app/pulsesurvey/addsurvey`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          Authorization: `bearer xadfadfetarsfgsaereateatagaeraesesedetegeed`,
        },
      },
    );
    const response = fetch(r).then(resp => resp.json());
    return response;
  }

  const allSurveys = () => {
    const r = new Request(
      `${baseURL}/v1/app/pulsesurvey/getsurveys`,
      {
        method: 'GET',
        headers: {
          Authorization: `bearer xadfadfetarsfgsaereateatagaeraesesedetegeed`,
        },
      },
    );
    const response = fetch(r).then(resp => resp.json());
    return response;
  }

  const surveyQuestions = (surveyId) => {
    const r = new Request(
      `${baseURL}/v1/app/pulsesurvey/${surveyId}/getquestions`,
      {
        method: 'GET',
        headers: {
          Authorization: `bearer xadfadfetarsfgsaereateatagaeraesesedetegeed`,
        },
      },
    );
    const response = fetch(r).then(resp => resp.json());
    return response;
  }

  const getemployeeRoaster = () => {
      const r = new Request(
      `https://apps.api.nextjump.com/v2/app/topten/colleagues`,      {
        method: 'GET',
        headers: {
          Authorization: `bearer 3zxhvWaYDghGBpJt1DdR170rYAQWvAIQNAsaPR0dbO75`,
        },
      },
    );
    const response = fetch(r).then(resp => resp.json());
    return response;
  }


  return {
    saveQuestion,
    allSurveys,
    surveyQuestions,
    getemployeeRoaster,
  };
};

export default { create };