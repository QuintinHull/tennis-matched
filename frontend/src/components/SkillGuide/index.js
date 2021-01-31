import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSkills } from "../../store/skill";
import { NavLink } from "react-router-dom";

function SkillGuide() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => {
    return Object.values(state.skill);
  });

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  return (
    <div>
      National Tennis Rating Program Skill Guide
      {skills.map((skill) => {
        return (
          <div key={skill.id}>
            <h5>{skill.level}</h5>
            <h5>{skill.description}</h5>
            {/* <NavLink>{skill.level} events</NavLink> */}
          </div>
        );
      })}
    </div>
  );
}

export default SkillGuide;
