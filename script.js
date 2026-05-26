const translations = {
  zh: {
    nav_home: "首页",
    nav_research: "研究",
    nav_projects: "项目",
    nav_publications: "论文",
    nav_notes: "笔记",
    nav_cv: "CV",
    nav_contact: "联系",

    hero_eyebrow: "Embodied AI · Robot Manipulation · Underwater Grasping",
    hero_title: "机器人操作与水下抓取",
    hero_description:
      "我正在学习和搭建真实机器人操作系统，关注动态目标感知、抗扰抓取和闭环执行。当前重点是先跑通一个可靠的最小闭环，再逐步扩展到扰动、恢复和泛化问题。",
    hero_button_projects: "查看项目",
    hero_button_cv: "查看 CV",

    quick_role_label: "身份",
    quick_role_value: "研究生",
    quick_focus_label: "方向",
    quick_focus_value: "Robot Manipulation",
    quick_email_label: "邮箱",

    profile_subtitle: "Embodied AI / Robot Manipulation",
    profile_text: "Building small, testable robotic manipulation systems.",

    motto_kicker: "Motto",
    motto_title: "科研鸡汤，但要能落到实验里",
    motto_button: "换一句",

    about_kicker: "About",
    about_title: "关于我",
    about_p1:
      "我关注具身智能与机器人操作，正在围绕视觉定位、机械臂控制、抓取执行和实验复盘搭建自己的研究系统。",
    about_p2:
      "目前的主要任务是把 D435i / 双目视觉、SO101 机械臂和水下/类水下抓取实验串成一个可运行的闭环。",
    about_p3:
      "我希望后续工作能更清楚地回答：扰动从哪里来，系统何时失败，怎样恢复，以及哪些实验指标真正说明问题。",

    research_kicker: "Research",
    research_title: "研究方向",
    research_1_title: "水下机器人操作",
    research_1_text: "围绕水下/类水下抓取，研究视觉定位、抓取执行和实验系统搭建。",
    research_2_title: "动态目标感知",
    research_2_text: "关注受扰动目标的检测、跟踪、状态估计和面向抓取的反馈更新。",
    research_3_title: "抗扰抓取",
    research_3_text: "分析目标扰动、动作偏差和失败恢复，不只看成功率，也看失败类型。",
    research_4_title: "策略学习",
    research_4_text: "学习 imitation learning、policy learning、diffusion policy 和 VLA 在操作任务中的用法。",

    projects_kicker: "Projects",
    projects_title: "项目",
    project_1_text: "一个最小闭环视觉抓取系统：目标检测、坐标标定、机械臂执行、结果记录。",
    project_2_text: "面向水下/类水下环境的目标定位，重点关注折射影响、深度不可靠和双目 RGB 替代方案。",
    project_3_text: "用二轴平面扰动平台研究目标运动、抓取时机、反馈修正和恢复策略。",
    project_4_text: "预留方向：用于整理仿真、数据采集、策略学习和真实机器人验证的实验流程。",

    notes_kicker: "Notes",
    notes_title: "技术笔记",
    notes_1_title: "系统搭建",
    notes_1_text: "相机、机械臂、ROS 2、LeRobot、标定和调试记录。",
    notes_2_title: "论文阅读",
    notes_2_text: "manipulation、VLA、diffusion policy、sim-to-real 等阅读笔记。",
    notes_3_title: "实验复盘",
    notes_3_text: "失败案例、误差来源、指标设计、消融和可视化。",
    notes_4_title: "全部笔记",
    notes_4_text: "进入笔记索引页，后续可以持续添加 Obsidian Markdown 内容。",

    card_more: "查看详情 →",

    cv_title: "简历",
    cv_text: "这里放教育经历、技能、项目、论文和奖项。当前先作为网页简历，之后可以再上传 PDF 版本。",
    cv_button_web: "查看网页 CV",
    cv_button_pdf: "下载 PDF CV（可选）",

    contact_kicker: "Contact",
    contact_title: "联系",
    contact_text: "欢迎就机器人操作、水下抓取、具身智能和真实机器人系统交流。",
    footer_text: "Built with GitHub Pages"
  },

  en: {
    nav_home: "Home",
    nav_research: "Research",
    nav_projects: "Projects",
    nav_publications: "Publications",
    nav_notes: "Notes",
    nav_cv: "CV",
    nav_contact: "Contact",

    hero_eyebrow: "Embodied AI · Robot Manipulation · Underwater Grasping",
    hero_title: "Robot Manipulation and Underwater Grasping",
    hero_description:
      "I am building and studying real robotic manipulation systems, with interests in dynamic target perception, robust grasping, and closed-loop execution. My current goal is to first make a reliable minimal loop work, then extend it to disturbance, recovery, and generalization.",
    hero_button_projects: "View Projects",
    hero_button_cv: "View CV",

    quick_role_label: "Role",
    quick_role_value: "Graduate Student",
    quick_focus_label: "Focus",
    quick_focus_value: "Robot Manipulation",
    quick_email_label: "Email",

    profile_subtitle: "Embodied AI / Robot Manipulation",
    profile_text: "Building small, testable robotic manipulation systems.",

    motto_kicker: "Motto",
    motto_title: "Research motivation, grounded in experiments",
    motto_button: "New line",

    about_kicker: "About",
    about_title: "About Me",
    about_p1:
      "I work on embodied AI and robot manipulation. I am building my research system around visual localization, arm control, grasp execution, and experiment review.",
    about_p2:
      "My current task is to connect D435i / stereo vision, the SO101 arm, and underwater-inspired grasping experiments into a working closed-loop system.",
    about_p3:
      "I want my later work to answer concrete questions: where disturbances come from, when the system fails, how recovery should work, and which metrics truly explain the result.",

    research_kicker: "Research",
    research_title: "Research Interests",
    research_1_title: "Underwater Robotic Manipulation",
    research_1_text: "Visual localization, grasp execution, and experimental systems for underwater-inspired manipulation.",
    research_2_title: "Dynamic Target Perception",
    research_2_text: "Detection, tracking, state estimation, and feedback updates for disturbed targets.",
    research_3_title: "Robust Grasping",
    research_3_text: "Target disturbance, action deviation, failure recovery, and failure-type analysis beyond success rate.",
    research_4_title: "Policy Learning",
    research_4_text: "Learning how imitation learning, policy learning, diffusion policy, and VLA methods are used in manipulation.",

    projects_kicker: "Projects",
    projects_title: "Projects",
    project_1_text: "A minimal closed-loop visual grasping system: target detection, coordinate calibration, arm execution, and logging.",
    project_2_text: "Target localization for underwater-inspired settings, focusing on refraction, unreliable depth, and stereo RGB alternatives.",
    project_3_text: "A two-axis planar disturbance platform for studying target motion, grasp timing, feedback correction, and recovery.",
    project_4_text: "A reserved direction for organizing simulation, data collection, policy learning, and real-robot validation.",

    notes_kicker: "Notes",
    notes_title: "Technical Notes",
    notes_1_title: "System Setup",
    notes_1_text: "Cameras, arms, ROS 2, LeRobot, calibration, and debugging records.",
    notes_2_title: "Paper Reading",
    notes_2_text: "Notes on manipulation, VLA, diffusion policy, sim-to-real, and related papers.",
    notes_3_title: "Experiment Review",
    notes_3_text: "Failure cases, error sources, metrics, ablations, and visualization.",
    notes_4_title: "All Notes",
    notes_4_text: "Open the note index. Obsidian Markdown notes can be added later.",

    card_more: "Read more →",

    cv_title: "CV",
    cv_text: "Education, skills, projects, publications, and awards. For now this is a web CV; a PDF version can be added later.",
    cv_button_web: "View Web CV",
    cv_button_pdf: "Download PDF CV (optional)",

    contact_kicker: "Contact",
    contact_title: "Contact",
    contact_text: "Feel free to contact me about robot manipulation, underwater grasping, embodied AI, or real robotic systems.",
    footer_text: "Built with GitHub Pages"
  }
};

const mottoLines = {
  zh: [
    "先让机器人稳定完成一个动作，再谈智能。",
    "好的系统不是不会失败，而是失败后能被看见、被解释、被修复。",
    "科研不是把 demo 做漂亮，而是把问题问清楚。",
    "真正的泛化，通常从一次失败复盘开始。",
    "机器人研究的浪漫，是把混乱的物理世界变成可验证的实验。",
    "不要急着追热点，先找到十年后仍然重要的问题。",
    "一次稳定的闭环，比十个悬浮的想法更有价值。",
    "让实验替你说话，让日志替你记忆，让失败替你选题。"
  ],
  en: [
    "Make one robotic behavior stable before calling it intelligence.",
    "A good system is not one that never fails, but one whose failures can be seen, explained, and fixed.",
    "Research is not about polishing a demo; it is about asking the right question.",
    "Real generalization often starts from one carefully analyzed failure.",
    "The romance of robotics is turning messy physics into testable experiments.",
    "Do not chase every trend. Find problems that still matter ten years later.",
    "One stable closed loop is worth more than ten floating ideas.",
    "Let experiments speak, logs remember, and failures choose the next question."
  ]
};

let currentLang = localStorage.getItem("preferredLang") || "zh";

function applyLanguage(lang) {
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = lang === "zh" ? "English" : "中文";

  const motto = document.getElementById("mottoText");
  if (motto) motto.textContent = mottoLines[lang][0];

  localStorage.setItem("preferredLang", lang);
}

function randomMotto() {
  const motto = document.getElementById("mottoText");
  if (!motto) return;

  const lines = mottoLines[currentLang];
  const current = motto.textContent;
  let next = lines[Math.floor(Math.random() * lines.length)];

  if (lines.length > 1) {
    while (next === current) {
      next = lines[Math.floor(Math.random() * lines.length)];
    }
  }

  motto.textContent = next;
}

const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "zh" ? "en" : "zh";
    applyLanguage(currentLang);
  });
}

const mottoButton = document.getElementById("mottoButton");
if (mottoButton) {
  mottoButton.addEventListener("click", randomMotto);
}

applyLanguage(currentLang);
