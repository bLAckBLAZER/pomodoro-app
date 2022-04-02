import { NavBar, Footer } from "../../components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useLocation } from "react-router-dom";
import "./Pomodoro.css";
import { useState } from "react";
import {
  formatSeconds,
  startTimer,
  pauseTimer,
  resetTimer,
} from "../../utils/pomodoroActions";

export const Pomodoro = () => {
  const location = useLocation();
  const { task } = location.state;
  const [progressValue, setProgressValue] = useState(0);
  const [timerId, setTimerId] = useState(0);

  // When the timer ends, reset it!
  if (progressValue > task.taskTime * 60) {
    resetTimer(timerId, setProgressValue);
  }

  return (
    <div className="flex flex-col justify-between">
      <NavBar title="Subtle Clock" />
      <main className="main-container">
        <div className="container">
          <section className="task-container">
            <div className="grid-2-col gap-1">
              <article className="flex flex-col align-ctr">
                <div className="pomodoro-circle">
                  <CircularProgressbar
                    value={progressValue}
                    text={formatSeconds(task.taskTime * 60 - progressValue)}
                    minValue={0}
                    maxValue={task.taskTime * 60}
                    styles={buildStyles({
                      textSize: "0.8rem",
                    })}
                  />
                </div>

                <div className="flex flex-col width-100">
                  <div className="flex">
                    <button
                      className="btn btn-primary btn-icon flex-1"
                      onClick={() =>
                        startTimer(timerId, setTimerId, setProgressValue)
                      }
                    >
                      <i class="fas fa-play"></i>
                      Start
                    </button>
                    <button
                      className="btn btn-secondary btn-icon flex-1"
                      onClick={() => pauseTimer(timerId)}
                    >
                      <i class="fas fa-pause"></i>
                      Pause
                    </button>
                  </div>
                  <button
                    className="btn"
                    onClick={() => resetTimer(timerId, setProgressValue)}
                  >
                    Reset
                  </button>
                </div>
              </article>

              <article>
                <div className="heading txt-center mg-y-1">
                  {task.taskTitle}
                </div>
                <div className="task-detail">
                  <div className="h4">{task.taskDescription}</div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
