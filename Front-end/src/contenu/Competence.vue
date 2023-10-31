<template>
  <article id="Competence">
    <div class="text-center m-5 min-[768px]:text-3xl max-md:text-xl text-white">
      <h2 class="font-bold uppercase underline">Mes Compétences</h2>
    </div>
    <div>
      <div id="SkillBox" class="bg-blue-400 w-6/12 max-md:w-11/12 dark:bg-zinc-800">
        <div
            class="SkillBar"
            v-for="(skill, index) in skills"
            :key="index"
        >
          <div :class="['Skill-' + skill.name]" >
            <span class="Skill-Area">{{ skill.name }}</span>
            <span class="PercentText">{{ skill.percent }}%</span>
            <div class="Skill-Details max-xl:hidden">
              {{ skill.details }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "HTML", percent: 100},
        { name: "CSS-SCSS", percent: 95 },
        { name: "Bootstrap-Tailwind", percent: 95 },
        { name: "Wordpress", percent: 85 },
        { name: "Javascript", percent: 80},
        { name: "PHP", percent: 80 },
        { name: "Symfony", percent: 75},
        { name: "Laravel", percent: 75},
        { name: "React", percent: 70 },
        { name: "SQL", percent: 65, details: "( MySQL, SQLite, PostgreSQL )" },
        { name: "Vue3", percent: 60},
      ],
    };
  },
};
</script>







