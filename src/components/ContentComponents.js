import OutnumberedElement from './OutnumberedElement';
import ProjectsList from './ProjectsList';
import SkillsList from './SkillsList';
import Text from './Text';

const SwitchComponents = {
    'STRAPI_ComponentContentText': Text,
    'STRAPI_ComponentContentOutnumberedElement': OutnumberedElement,
    'STRAPI_ComponentContentProjectsList': ProjectsList,
    'STRAPI_ComponentContentSkillsList': SkillsList,
};

export default SwitchComponents