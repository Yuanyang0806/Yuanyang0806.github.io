const translations = {
  zh: {
    nav_about: "关于",
    nav_research: "研究方向",
    nav_projects: "项目",
    nav_publications: "论文",
    nav_notes: "笔记",
    nav_contact: "联系",

    hero_eyebrow: "具身智能 · 机器人操作 · 水下抓取",
    hero_title: "面向扰动环境的机器人操作与水下抓取研究",
    hero_description:
      "我关注 embodied AI 与 robot manipulation，重点研究水下/类水下环境中的动态目标感知、目标扰动、动作执行偏差与恢复策略，目标是构建可验证、可复现、能在真实机器人系统中闭环运行的 manipulation pipeline。",
    hero_button_projects: "查看项目",
    hero_button_contact: "联系我",

    quick_role_label: "身份",
    quick_role_value: "硕博生 / Graduate Student",
    quick_focus_label: "方向",
    quick_focus_value: "Robot Manipulation",
    quick_email_label: "邮箱",

    profile_subtitle: "Embodied AI / Robot Manipulation Researcher",
    profile_text:
      "Current focus: robust underwater grasping under target disturbance, visual uncertainty, and action execution deviation.",

    about_kicker: "About",
    about_title: "关于我",
    about_p1:
      "我是一名具身智能与机器人操作方向的研究生，研究兴趣集中在 robot manipulation、动态目标感知、抗扰操作、模仿学习、强化学习以及真实机器人系统中的闭环执行问题。",
    about_p2:
      "目前我的研究主线是水下/类水下抓取：在深度感知不可靠、目标存在平面扰动、动作执行存在偏差的条件下，设计一个可以感知、决策、执行并恢复的最小闭环系统。",
    about_p3:
      "我更关注可以被真实系统验证的问题：失败边界、扰动建模、恢复策略、评估指标、可复现实验流程，以及从工程系统中提炼出的科研问题。",

    research_kicker: "Research",
    research_title: "研究方向",
    research_1_title: "水下机器人抓取",
    research_1_text:
      "研究水下/类水下环境中的目标定位、抓取执行、扰动处理与闭环恢复，关注从实验系统到可复现实验协议的完整链路。",
    research_2_title: "动态目标感知",
    research_2_text:
      "面向运动或受扰动目标，研究视觉跟踪、目标状态估计、时序感知与面向操作任务的动态表征。",
    research_3_title: "抗扰操作与恢复策略",
    research_3_text:
      "研究动作执行偏差、目标扰动、接触不确定性下的失败检测、重规划、纠偏与恢复控制。",
    research_4_title: "具身智能与策略学习",
    research_4_text:
      "关注 imitation learning、policy learning、VLA、diffusion policy 等方法在真实 manipulation 任务中的泛化与失效模式。",

    projects_kicker: "Projects",
    projects_title: "项目与系统",

    project_1_title: "Underwater Object Grasping with Disturbance Recovery",
    project_1_text:
      "一个面向水下/类水下环境的抓取研究系统，重点研究目标扰动、动作执行偏差、抓取失败检测与恢复策略。",
    project_1_li1: "目标：建立可复现的扰动抓取 benchmark",
    project_1_li2: "变量：目标平面扰动、视觉误差、执行偏差",
    project_1_li3: "输出：成功率、恢复率、轨迹偏差、失败类型分析",

    project_2_title: "D435i + SO101 Visual Grasping Pipeline",
    project_2_text:
      "基于 RealSense D435i 与 LeRobot SO101 构建的最小闭环视觉抓取系统，用于验证目标定位、坐标标定、动作执行与反馈更新。",
    project_2_li1: "视觉：目标检测与 board_xy 坐标估计",
    project_2_li2: "执行：SO101 机械臂动作控制与抓取",
    project_2_li3: "目标：先跑通 v0，再逐步增加扰动与恢复机制",

    project_3_title: "Planar Disturbance Platform for Manipulation",
    project_3_text:
      "计划构建二轴平面扰动平台，用于系统性研究目标运动、扰动频率、扰动幅值与抓取策略之间的关系。",
    project_3_li1: "控制变量：扰动方向、速度、幅值、频率",
    project_3_li2: "研究问题：何时需要预测，何时只需反馈修正",
    project_3_li3: "目标：形成更扎实的实验论证链条",

    publications_kicker: "Publications",
    publications_title: "论文与成果",
    publications_text:
      "论文、预印本、技术报告和开源项目将在这里更新。目前该页面主要用于记录研究方向、项目系统和实验进展。",
    publications_empty_title: "Coming soon",
    publications_empty_text:
      "Future publications, preprints, posters, and code repositories will be listed here.",

    notes_kicker: "Notes",
    notes_title: "技术笔记",
    notes_1_title: "机器人系统搭建",
    notes_1_text:
      "记录相机、机械臂、标定、ROS 2、LeRobot、数据采集与实验调试过程。",
    notes_2_title: "论文阅读",
    notes_2_text:
      "梳理 manipulation、VLA、diffusion policy、sim-to-real、contact-rich manipulation 相关论文。",
    notes_3_title: "实验复盘",
    notes_3_text:
      "分析失败案例、系统误差、数据分布、seed variance、消融实验与评估指标。",

    contact_kicker: "Contact",
    contact_title: "联系我",
    contact_text:
      "如果你对 robot manipulation、underwater grasping、embodied AI 或真实机器人系统研究感兴趣，可以通过邮箱或 GitHub 联系我。",

    footer_text: "Built with GitHub Pages"
  },

  en: {
    nav_about: "About",
    nav_research: "Research",
    nav_projects: "Projects",
    nav_publications: "Publications",
    nav_notes: "Notes",
    nav_contact: "Contact",

    hero_eyebrow: "Embodied AI · Robot Manipulation · Underwater Grasping",
    hero_title:
      "Robot Manipulation and Underwater Grasping under Disturbance",
    hero_description:
      "I work on embodied AI and robot manipulation, with a focus on dynamic target perception, target disturbance, action execution deviation, and recovery strategies in underwater or underwater-inspired environments. My goal is to build verifiable, reproducible, closed-loop manipulation pipelines on real robotic systems.",
    hero_button_projects: "View Projects",
    hero_button_contact: "Contact Me",

    quick_role_label: "Role",
    quick_role_value: "Graduate Student",
    quick_focus_label: "Focus",
    quick_focus_value: "Robot Manipulation",
    quick_email_label: "Email",

    profile_subtitle: "Embodied AI / Robot Manipulation Researcher",
    profile_text:
      "Current focus: robust underwater grasping under target disturbance, visual uncertainty, and action execution deviation.",

    about_kicker: "About",
    about_title: "About Me",
    about_p1:
      "I am a graduate student working on embodied AI and robot manipulation. My research interests include robot manipulation, dynamic target perception, robust manipulation, imitation learning, reinforcement learning, and closed-loop execution on real robotic systems.",
    about_p2:
      "My current research thread focuses on underwater or underwater-inspired grasping: designing a minimal closed-loop system that can perceive, decide, execute, and recover when depth sensing is unreliable, targets are disturbed, and robot actions deviate from their nominal execution.",
    about_p3:
      "I care about problems that can be validated on physical systems: failure boundaries, disturbance modeling, recovery strategies, evaluation metrics, reproducible experimental pipelines, and research questions extracted from engineering systems.",

    research_kicker: "Research",
    research_title: "Research Interests",
    research_1_title: "Underwater Robotic Grasping",
    research_1_text:
      "Robust grasping and manipulation in underwater or underwater-inspired environments, from target localization and grasp execution to disturbance handling and recovery.",
    research_2_title: "Dynamic Target Perception",
    research_2_text:
      "Visual tracking, target state estimation, temporal perception, and manipulation-oriented representations for moving or disturbed objects.",
    research_3_title: "Disturbance and Recovery",
    research_3_text:
      "Failure detection, replanning, correction, and recovery under action deviation, target disturbance, and contact uncertainty.",
    research_4_title: "Embodied AI and Policy Learning",
    research_4_text:
      "Generalization and failure modes of imitation learning, policy learning, VLA models, and diffusion policies in real manipulation tasks.",

    projects_kicker: "Projects",
    projects_title: "Projects and Systems",

    project_1_title: "Underwater Object Grasping with Disturbance Recovery",
    project_1_text:
      "A robotic manipulation system for underwater-inspired grasping, focusing on target disturbance, action execution deviation, failure detection, and recovery strategies.",
    project_1_li1: "Goal: build a reproducible disturbed-grasping benchmark",
    project_1_li2: "Variables: planar target disturbance, visual error, execution deviation",
    project_1_li3: "Outputs: success rate, recovery rate, trajectory deviation, failure taxonomy",

    project_2_title: "D435i + SO101 Visual Grasping Pipeline",
    project_2_text:
      "A minimal closed-loop visual grasping system based on RealSense D435i and LeRobot SO101, used to validate target localization, coordinate calibration, execution, and feedback updates.",
    project_2_li1: "Vision: target detection and board_xy coordinate estimation",
    project_2_li2: "Execution: SO101 arm control and grasp execution",
    project_2_li3: "Goal: first complete v0, then add disturbance and recovery mechanisms",

    project_3_title: "Planar Disturbance Platform for Manipulation",
    project_3_text:
      "A planned two-axis planar disturbance platform for systematically studying target motion, disturbance frequency, disturbance amplitude, and grasping strategy.",
    project_3_li1: "Controlled variables: direction, speed, amplitude, and frequency",
    project_3_li2: "Research question: when is prediction necessary, and when is feedback correction sufficient?",
    project_3_li3: "Goal: build a stronger experimental argument chain",

    publications_kicker: "Publications",
    publications_title: "Publications and Outputs",
    publications_text:
      "Papers, preprints, technical reports, and open-source projects will be updated here. For now, this page records my research direction, system development, and experimental progress.",
    publications_empty_title: "Coming soon",
    publications_empty_text:
      "Future publications, preprints, posters, and code repositories will be listed here.",

    notes_kicker: "Notes",
    notes_title: "Technical Notes",
    notes_1_title: "Robotic System Building",
    notes_1_text:
      "Notes on cameras, manipulators, calibration, ROS 2, LeRobot, data collection, and experiment debugging.",
    notes_2_title: "Paper Reading",
    notes_2_text:
      "Reading notes on manipulation, VLA, diffusion policy, sim-to-real, and contact-rich manipulation.",
    notes_3_title: "Experiment Review",
    notes_3_text:
      "Analysis of failure cases, system errors, data distribution, seed variance, ablations, and evaluation metrics.",

    contact_kicker: "Contact",
    contact_title: "Contact",
    contact_text:
      "If you are interested in robot manipulation, underwater grasping, embodied AI, or real robotic systems, feel free to contact me via email or GitHub.",

    footer_text: "Built with GitHub Pages"
  }
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
  document.getElementById("langToggle").textContent =
    lang === "zh" ? "English" : "中文";

  localStorage.setItem("preferredLang", lang);
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  applyLanguage(currentLang);
});

applyLanguage(currentLang);
