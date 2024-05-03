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
  const [feedback, setFeedback] = useState(getFeedback());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("saved-feedbacks", JSON.stringify(feedback));
    setIsVisible(feedback.good + feedback.neutral + feedback.bad > 0);
    return () => {};
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((feedbacks) => ({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        options={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />

      {isVisible ? (
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
