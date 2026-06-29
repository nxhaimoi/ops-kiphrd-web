/*
  Editable layout file for the OPS x KIPHRD meeting website.

  How to edit:
  - Keep this first line format: window.OPS_KIPHRD_LAYOUT = { ... };
  - Edit text inside quotes.
  - Add or remove cards, bullets, questions, sources or tools as needed.
  - Refresh index.html after saving this file.
*/
window.OPS_KIPHRD_LAYOUT = {
  meta: {
    title: "OPS x KIPHRD Training Program Discussion",
    shortTitle: "OPS x KIPHRD",
    subtitle: "CCGT operations competency development",
    meetingTag: "OPS meeting brief | KIPHRD discussion",
    org: "EVNGENCO3 Operation Services",
    date: "2026"
  },
  tabs: [
    {
      id: "ops",
      label: "OPS",
      icon: "hub",
      headline: "1. OPS introduction and operating context",
      subhead: "OPS is the EVNGENCO3 operation service branch established to provide professional power plant operation services, starting from PM3 and PM2.2 after BOT transfer to EVN.",
      visual: "opsTimeline",
      timeline: [
        { date: "EVN", title: "Controlling shareholder", text: "Vietnam Electricity (EVN) holds controlling ownership in EVNGENCO3 JSC." },
        { date: "GENCO3", title: "Parent company", text: "EVNGENCO3 is a joint stock generation company in the EVN ecosystem." },
        { date: "01 Jan 2026", title: "OPS established", text: "EVNGENCO3 Operation Services (OPS) is established as a branch under EVNGENCO3." },
        { date: "Core business", title: "Power plant operation services", text: "OPS' main business is providing professional operation services for power generation assets." },
        { date: "PM3 + PM2.2", title: "Initial operating contracts", text: "OPS currently operates PM3 and PM2.2 for EVN after completion of the BOT period." }
      ],
      cards: [
        { title: "Ownership context", text: "EVN -> controlling ownership in EVNGENCO3 JSC -> OPS as an EVNGENCO3 operation service branch." },
        { title: "Business focus", text: "Operation services for power plants: shift operation, control room monitoring, field operation, operating procedures and dispatch compliance." },
        { title: "Current baseline", text: "PM3 and PM2.2 are the first reference plants for OPS to build its operating model, competency standards and training roadmap." }
      ]
    },
    {
      id: "plants",
      label: "PM3 / PM2.2",
      icon: "factory",
      headline: "2. PM3 and PM2.2 CCGT fleet",
      subhead: "These BOT-transfer CCGT assets should be the reference fleet for OPS operator qualification, system training, simulator scenarios and data-driven operation services.",
      visual: "plantBrief",
      overview: [
        { value: "PM3 + PM2.2", label: "BOT assets transferred to EVN" },
        { value: "2-2-1", label: "2 gas turbines + 2 HRSGs + 1 steam turbine" },
        { value: "1,430+ MW", label: "Combined installed capacity basis" },
        { value: "OPS baseline", label: "Reference fleet for competency framework" }
      ],
      plantCards: [
        {
          name: "Phu My 3",
          capacity: "715.717 MW",
          type: "Combined Cycle Power Plant",
          handover: "01 Mar 2024",
          configuration: "2 GT + 2 HRSG + 1 ST",
          image: "./assets/pm3-online.jpg",
          sourceUrl: "https://nangluongvietnam.vn/tong-cong-ty-phat-dien-3-khong-ngung-nang-cao-hieu-qua-san-xuat-kinh-doanh-34202.html",
          note: "Siemens turbine technology and equipment. GT31/GT32: V94.3A, 231.36 MW each. ST33: STG10, 253 MW. HRSG: Doosan heat recovery steam generators.",
          systems: ["Siemens V94.3A", "STG10", "Doosan HRSG", "DCS/HMI", "Generator & excitation"]
        },
        {
          name: "Phu My 2.2",
          capacity: "715 MW",
          type: "Combined Cycle Power Plant",
          handover: "04 Feb 2025",
          configuration: "2 GT + 2 HRSG + 1 ST",
          image: "./assets/pm22-evn-online.jpg",
          imageFallback: "",
          sourceUrl: "https://en.evn.com.vn/userfile/User/huongbtt/images/2024/12/48-20250103155313619_12%20Phu%20My.jpg",
          note: "GE (Alstom) turbine technology and equipment. GT1/GT2: 9F.03, 225 MW each. ST3: D11, 265 MW. HRSG: NEM heat recovery steam generators.",
          systems: ["GE 9F.03", "D11 steam turbine", "NEM HRSG", "Generator & AVR", "LCI/SFC", "DCS/HMI"]
        }
      ]
    },
    {
      id: "position",
      label: "Position & Competency",
      icon: "users",
      headline: "3. Operation position and competency standards",
      subhead: "The PM2.2 operating shift model should be converted into a position-based qualification standard: knowledge, skills and key role.",
      visual: "positionStandards",
      org: [
        {
          role: "Shift Supervisor",
          short: "Shift command",
          color: "blue",
          knowledge: ["Grid dispatch protocol", "Plant operating envelope", "Emergency operating procedures"],
          skills: ["Direct shift execution", "Authorize PTW / switching", "Lead abnormal and emergency response"],
          keyRole: "Accountable for safe, reliable and economic operation of the plant during the shift.",
          evidence: "Simulator scenario, oral board, event report review"
        },
        {
          role: "Shift Team Leader",
          short: "Execution control",
          color: "red",
          knowledge: ["System configuration", "Operating procedures", "PTW / LOTO boundaries"],
          skills: ["Coordinate CRO and field operators", "Supervise local switching", "Verify equipment readiness"],
          keyRole: "Ensures the Shift Supervisor's instructions are executed correctly across control room and field positions.",
          evidence: "Switching simulation, field walkdown, coaching record"
        },
        {
          role: "Control Room Operator",
          short: "DCS / HMI operation",
          color: "green",
          knowledge: ["DCS/HMI hierarchy", "Alarm philosophy", "Start-up / shutdown sequences"],
          skills: ["Operate generating units from HMI", "Monitor trends and alarms", "Maintain operating logs"],
          keyRole: "Maintains real-time process awareness and executes approved control room operations.",
          evidence: "Simulator run, alarm response test, logbook audit"
        },
        {
          role: "GT / HRSG Field Operator",
          short: "Gas path area",
          color: "yellow",
          knowledge: ["GT auxiliaries", "Fuel gas and lube oil systems", "HRSG operating parameters"],
          skills: ["Perform field rounds", "Carry out local operations", "Detect leakage, vibration and unsafe conditions"],
          keyRole: "Provides local equipment condition feedback and executes GT/HRSG field actions under command.",
          evidence: "Field round checklist, local operation drill"
        },
        {
          role: "ST / BOP Field Operator",
          short: "Steam cycle area",
          color: "blue",
          knowledge: ["Steam turbine systems", "Condenser and feedwater cycle", "Balance-of-plant auxiliaries"],
          skills: ["Monitor steam-water cycle", "Support start-up / shutdown", "Respond to local abnormalities"],
          keyRole: "Maintains field readiness of the steam cycle and balance-of-plant systems.",
          evidence: "Walkdown assessment, emergency drill"
        }
      ],
      commonRequirements: ["Professional knowledge", "Practical skills", "HSE discipline", "Communication", "Troubleshooting", "Work ethics"]
    },
    {
      id: "roadmap",
      label: "Roadmap",
      icon: "route",
      headline: "4. Training roadmap by stages",
      subhead: "Plant-specific familiarization can be trained internally. KIPHRD should provide advanced systems, methodology, simulator practice, data analytics and tool-based modules.",
      visual: "timeline",
      timeline: [
        { phase: "Stage 1", title: "Plant Familiarization", time: "0-6 months", text: "HSE, PTW/LOTO, CCGT process overview, P&ID reading, field walkdown, SOP use, shift log and technical English." },
        { phase: "Stage 2", title: "System Operation", time: "6-12 months", text: "GT, HRSG, ST, generator, AVR/excitation, LCI/SFC, DCS/HMI, start-up, shutdown and normal operating modes." },
        { phase: "Stage 3", title: "Abnormal Operation", time: "12-24 months", text: "Alarm management, EOPs, incident command, RCA, simulator drills, performance monitoring and heat-rate awareness." },
        { phase: "Stage 4", title: "Digital Operations", time: "24+ months", text: "IDPP, plant historian, dashboard design, early warning, reliability/performance analytics, CMMS/EAM and fleet learning." }
      ]
    },
    {
      id: "training",
      label: "Training Domains",
      icon: "school",
      headline: "5. Proposed training program for KIPHRD",
      subhead: "Four domains: tool-based, commercially accredited where possible, tied to real plant operation and OPS service development.",
      visual: "trainingDomains",
      domains: [
        {
          label: "Domain A",
          title: "O&M Management Methodologies",
          color: "blue",
          items: [
            { tag: "CRM", name: "Crew Resource Management", detail: "Communication, situational awareness, human factors" },
            { tag: "RCM", name: "Reliability-Centered Maintenance", detail: "Failure modes and maintenance strategy" },
            { tag: "CMMS", name: "Computerized Maintenance Mgmt System", detail: "Work orders, asset registry, defects" },
            { tag: "TBM/CBM", name: "Time / Condition-Based Maintenance", detail: "PM planning and condition monitoring" },
            { tag: "TPM", name: "Total Productive Maintenance", detail: "Operator asset care and zero-breakdown culture" }
          ]
        },
        {
          label: "Domain B",
          title: "Power Plant Fundamentals",
          color: "green",
          items: [
            { tag: "Thermo", name: "Combined Cycle Thermodynamics", detail: "Heat balance and efficiency" },
            { tag: "Electrical", name: "Power Plant Electrical Systems", detail: "Generators, transformers, relays, switchgear" },
            { tag: "I&C", name: "Instrumentation and Control Basics", detail: "Sensors, loops, DCS logic" },
            { tag: "Chemistry", name: "Cycle Water and Steam Chemistry", detail: "Corrosion and water treatment" }
          ]
        },
        {
          label: "Domain C",
          title: "Key Systems Training",
          color: "orange",
          items: [
            { tag: "GT O&M", name: "Gas Turbine Operation and Maintenance", detail: "Start-up, loading, protection, inspections" },
            { tag: "Gen & AVR", name: "Generator and Voltage Regulation", detail: "Excitation, AVR, synchronization, protection" },
            { tag: "LCI/SFC", name: "Static Frequency Converter", detail: "Starting sequence and interlocks" },
            { tag: "DCS", name: "DCS/HMI and Alarm Management", detail: "Alarm philosophy, trends, SOE review" }
          ]
        },
        {
          label: "Domain D",
          title: "Digital and Tool-Based Training",
          color: "purple",
          items: [
            { tag: "Simulator", name: "CCGT Plant Simulator Training", detail: "Trip recovery, alarm flood, emergency drills" },
            { tag: "SAP/Maximo", name: "SAP PM / IBM Maximo", detail: "Work orders, asset data, KPI dashboards" },
            { tag: "PI/AVEVA", name: "OSIsoft PI / AVEVA Historian", detail: "Trends, performance and event investigation" },
            { tag: "IDPP", name: "IDPP and Operations Analytics", detail: "Data governance, early warning, remote support" }
          ]
        }
      ]
    },
    {
      id: "discussion",
      label: "Discussion",
      icon: "message",
      headline: "6. Q&A for KIPHRD discussion",
      subhead: "Use this page to capture KIPHRD's answers directly during the meeting: equipment scope, simulator practice and commercial delivery model in Vietnam.",
      visual: "questions",
      questions: [
        {
          no: "1",
          question: "The training program only mentions GE Mark VIe. Does KIPHRD offer technical training on Siemens T3000? If so, what does the training include?",
          answer: ""
        },
        {
          no: "2",
          question: "For GT/ST/HRSG principle and operation training, which OEM equipment line will KIPHRD use? Is the program compatible with PM3's equipment?",
          answer: ""
        },
        {
          no: "3",
          question: "Does KIPHRD use simulation in training? If yes, which system is simulated and what is the simulation level?",
          answer: ""
        },
        {
          no: "4",
          question: "For the CCPP simulator practice section, which reference plant was the simulator built on (GE, Siemens, etc.) and what operating scenarios are available?",
          answer: ""
        },
        {
          no: "5",
          question: "How can KIPHRD deploy training services in Vietnam: direct contract, local commercial partner, or another implementation model?",
          answer: ""
        }
      ]
    },
    {
      id: "sources",
      label: "Sources",
      icon: "link",
      headline: "7. Source notes",
      subhead: "These notes support the meeting storyline. Please verify contractual and handover wording before external sharing.",
      visual: "sources",
      sources: [
        {
          title: "OPS establishment proposal",
          note: "Used for OPS positioning: integrated operation service, O&M interface with EPS, data analytics, reliability/performance, IDPP, KPI/SLA and digital operation services.",
          url: ""
        },
        {
          title: "Internal PM2.2 shift duty rule",
          note: "Decision 1994/QD-GENCO3 dated 23 Jun 2025: PM2.2 shift positions, command relationship, PTW/switching, field inspection and incident response duties.",
          url: ""
        },
        {
          title: "Public plant and image sources",
          note: "Public sources used for plant context and online imagery. BOT transfer and equipment model details should be checked against EVN/GENCO3/OEM records before formal issue.",
          url: "https://congthuong.vn/chuyen-giao-nha-may-dien-phu-my-22-cho-evn-373188.html"
        }
      ]
    }
  ]
};
