import { useEffect, useState } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import css from "./App.module.css";

const getFeedback = () => {
  const savedFeedback = localStorage.getItem("saved-feedback");
  return savedFeedback !== null
    ? JSON.parse(savedFeedback)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [feedback, setFeedback] = useState(getFeedback);

  const updateFeedback = (feedbackType) => {
    setFeedback((feedbacks) => ({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback));
    return () => {};
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <Description />
      <Options
        options={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
