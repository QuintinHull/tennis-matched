import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSkills } from "../../store/skill";
import { NavLink } from "react-router-dom";
import "./SkillGuide.css";

function SkillGuide() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => {
    return Object.values(state.skill);
  });

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  return (
    <div className="skills_container">
      {skills.map((skill) => {
        return (
          <div key={skill.id}>
            <NavLink className="nav_link" to={`/events/skill/${skill.id}`}>
              <div className="skill_container">
                <h3>Level {skill.level}:</h3>
                <h5>{skill.description}</h5>
              </div>
            </NavLink>
          </div>
        );
      })}
      <p className="footnote">* National Tennis Rating Program Skill Guide</p>
    </div>
  );
}

export default SkillGuide;
