import { useState, useEffect } from "react";
import {
  Home, BookOpen, Target, BarChart3, ChevronRight, ArrowLeft,
  Check, X, Flame, Newspaper, Network, Languages, MapPin, CircleDot, Sparkles, Lock
} from "lucide-react";
import { UI, t, SUBJECTS, CURRENT_AFFAIRS, SYLLABUS_TREE, ENTITY_INFO, topicById } from "./data/content.js";

// ---- Himalayan palette (inline styles guarantee the identity renders) ----
const C = {
  pine: "#1f4a37", pineDark: "#163a2b", pineSoft: "#2e6149",
  marigold: "#df9430", marigoldSoft: "#f4c66b",
  stone: "#f3efe6", card: "#ffffff", ink: "#1b231e", inkSoft: "#5d685f",
  glacier: "#3d6f7e", line: "#e6dfd0", good: "#2e7d57", bad: "#bf4a30",
};

// ---- UI chrome strings (both languages first-class) ----
const STATUS = {
  none: { hi: "शुरू नहीं", en: "Not started", color: C.line, text: C.inkSoft },
  learning: { hi: "सीख रहे", en: "Learning", color: C.glacier, text: "#fff" },
  revised: { hi: "रिवाइज़", en: "Revised", color: C.pine, text: "#fff" },
};

function loadState() {
  try { return JSON.parse(localStorage.getItem("shikhar_state") || "{}"); } catch (e) { return {}; }
}
function saveState(s) {
  try { localStorage.setItem("shikhar_state", JSON.stringify(s)); } catch (e) {}
}
const SAVED = loadState();

export default function App() {
  const [lang, setLang] = useState(SAVED.lang || null);
  const [name, setName] = useState(SAVED.name || "");
  const [examDate, setExamDate] = useState(SAVED.examDate || "");
  const [onboarded, setOnboarded] = useState(!!SAVED.examDate);
  const [tab, setTab] = useState("home");
  const [topic, setTopic] = useState(null); // topic id for detail
  const [quiz, setQuiz] = useState(null); // {topicId} or {mixed:true}
  const [tutor, setTutor] = useState(null); // {context, title} when AI tutor open
  const [coverage, setCoverage] = useState(SAVED.coverage || {});

  useEffect(() => { saveState({ lang, name, examDate, coverage }); }, [lang, name, examDate, coverage]);

  useEffect(() => {
    const id = "mukta-font";
    if (!document.getElementById(id)) {
      const l = document.createElement("link");
      l.id = id; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  const L = lang || "en";

  // ---------- Language picker ----------
  if (!lang) {
    return (
      <div style={{ minHeight: "100vh", background: C.pine, fontFamily: "Mukta, system-ui, sans-serif",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <Style />
        <Contour faint />
        <div style={{ position: "relative", textAlign: "center", color: C.stone }}>
          <Peak size={54} color={C.marigoldSoft} />
          <div style={{ fontSize: 40, fontWeight: 800, marginTop: 8, letterSpacing: 0.5 }}>शिखर · Shikhar</div>
          <div style={{ color: C.marigoldSoft, marginTop: 2, fontWeight: 500 }}>UKPCS · base to summit</div>
          <div style={{ marginTop: 40, fontSize: 18, opacity: 0.9 }}>{UI.pickLang.en} / {UI.pickLang.hi}</div>
          <div style={{ fontSize: 13, opacity: 0.6, marginTop: 4 }}>{UI.pickSub.en} · {UI.pickSub.hi}</div>
          <div style={{ display: "flex", gap: 14, marginTop: 28, justifyContent: "center" }}>
            {[["hi", "हिंदी"], ["en", "English"]].map(([code, label]) => (
              <button key={code} onClick={() => setLang(code)}
                style={{ background: C.marigold, color: "#2a1d05", border: "none", borderRadius: 16,
                  padding: "16px 30px", fontSize: 20, fontWeight: 700, cursor: "pointer",
                  fontFamily: "Mukta, sans-serif", boxShadow: "0 6px 0 rgba(0,0,0,0.15)" }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!onboarded) {
    return <Onboarding L={L} name={name} setName={setName} examDate={examDate} setExamDate={setExamDate} onDone={() => setOnboarded(true)} />;
  }

  const go = (setter, v) => { setter(v); };

  // ---------- Shell ----------
  return (
    <div style={{ minHeight: "100vh", background: C.stone, fontFamily: "Mukta, system-ui, sans-serif", color: C.ink }}>
      <Style />
      <div style={{ maxWidth: 440, margin: "0 auto", minHeight: "100vh", background: C.stone,
        display: "flex", flexDirection: "column", position: "relative" }}>

        {/* Header */}
        <header style={{ background: C.pine, color: C.stone, padding: "16px 18px 18px", position: "relative", overflow: "hidden" }}>
          <Contour />
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Peak size={26} color={C.marigoldSoft} />
              <div>
                <div style={{ fontWeight: 800, fontSize: 20, lineHeight: 1 }}>{t("appName", L)}</div>
                <div style={{ fontSize: 11, color: C.marigoldSoft, fontWeight: 500 }}>{t("tagline", L)}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, padding: 3 }}>
              <Languages size={15} color={C.stone} style={{ margin: "0 2px" }} />
              {[["en", "English"], ["hi", "हिंदी"]].map(([code, label]) => (
                <button key={code} onClick={() => setLang(code)}
                  style={{ background: L === code ? C.marigold : "transparent",
                    color: L === code ? "#2a1d05" : C.stone, border: "none", borderRadius: 999,
                    padding: "4px 11px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Mukta, sans-serif" }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Body */}
        <main style={{ flex: 1, overflowY: "auto", padding: "16px 16px 96px" }}>
          {tutor
            ? <AITutor L={L} context={tutor.context} title={tutor.title} onExit={() => setTutor(null)} />
            : topic
            ? <TopicDetail L={L} topic={topicById(topic)} coverage={coverage} setCoverage={setCoverage}
                onBack={() => setTopic(null)} onPractice={(id) => { setTopic(null); setQuiz({ topicId: id }); }}
                onAsk={(ctx) => setTutor(ctx)} />
            : quiz
            ? <Quiz L={L} quiz={quiz} onExit={() => setQuiz(null)} />
            : tab === "home" ? <HomeTab L={L} setTab={setTab} setTopic={setTopic} coverage={coverage} name={name} examDate={examDate} onEditDate={() => setOnboarded(false)} />
            : tab === "syllabus" ? <SyllabusTab L={L} coverage={coverage} setTopic={setTopic} />
            : tab === "practice" ? <PracticeTab L={L} setQuiz={setQuiz} onAsk={(ctx) => setTutor(ctx)} />
            : <ProgressTab L={L} coverage={coverage} />}
        </main>

        {/* Bottom nav */}
        {!topic && !quiz && !tutor && (
          <nav style={{ position: "fixed", bottom: 0, left: 0, right: 0, maxWidth: 440, margin: "0 auto",
            background: C.card, borderTop: `1px solid ${C.line}`, display: "flex", padding: "8px 6px 10px" }}>
            {[["home", Home], ["syllabus", BookOpen], ["practice", Target], ["progress", BarChart3]].map(([key, Icon]) => {
              const active = tab === key;
              return (
                <button key={key} onClick={() => go(setTab, key)}
                  style={{ flex: 1, background: "none", border: "none", cursor: "pointer", display: "flex",
                    flexDirection: "column", alignItems: "center", gap: 3, fontFamily: "Mukta, sans-serif",
                    color: active ? C.pine : C.inkSoft }}>
                  <Icon size={22} strokeWidth={active ? 2.4 : 1.8} />
                  <span style={{ fontSize: 11, fontWeight: active ? 700 : 500 }}>{t(key, L)}</span>
                  <span style={{ width: 18, height: 3, borderRadius: 2, background: active ? C.marigold : "transparent" }} />
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
}

// ---------- Home ----------
function Onboarding({ L, name, setName, examDate, setExamDate, onDone }) {
  return (
    <div style={{ minHeight: "100vh", background: C.stone, fontFamily: "Mukta, system-ui, sans-serif", color: C.ink }}>
      <Style />
      <div style={{ maxWidth: 440, margin: "0 auto", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ background: C.pine, color: C.stone, padding: "24px 20px", position: "relative", overflow: "hidden" }}>
          <Contour />
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 10 }}>
            <Peak size={28} color={C.marigoldSoft} />
            <div style={{ fontSize: 22, fontWeight: 800 }}>{L === "hi" ? "चलिए शुरू करें" : "Let's set you up"}</div>
          </div>
        </div>
        <div style={{ padding: 20, flex: 1 }}>
          <label style={{ fontSize: 13, fontWeight: 700 }}>{L === "hi" ? "आपका नाम (वैकल्पिक)" : "Your name (optional)"}</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder={L === "hi" ? "नाम" : "Name"}
            style={{ width: "100%", marginTop: 6, marginBottom: 18, border: `1.5px solid ${C.line}`, borderRadius: 12,
              padding: "12px 14px", fontSize: 15, fontFamily: "Mukta, sans-serif", outline: "none", background: C.card }} />
          <label style={{ fontSize: 13, fontWeight: 700 }}>{L === "hi" ? "आपकी परीक्षा कब है?" : "When is your exam?"}</label>
          <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)}
            style={{ width: "100%", marginTop: 6, border: `1.5px solid ${C.line}`, borderRadius: 12,
              padding: "12px 14px", fontSize: 15, fontFamily: "Mukta, sans-serif", outline: "none", background: C.card }} />
          <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 8 }}>
            {L === "hi" ? "हम आपकी दैनिक योजना इसी तिथि के अनुसार बनाएँगे।" : "We'll pace your daily plan to this date."}
          </div>
          <button onClick={onDone} disabled={!examDate} style={{ ...btnPrimary, opacity: examDate ? 1 : 0.5, marginTop: 28 }}>
            {L === "hi" ? "शुरू करें" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

function HomeTab({ L, setTab, setTopic, coverage, name, examDate, onEditDate }) {
  const [mode, setMode] = useState("today");

  const readyOrdered = SYLLABUS_TREE.flatMap((s) => s.topics.filter((tp) => tp.ready).map((tp) => ({ ...tp, sub: s })));
  const nextIdx = readyOrdered.findIndex((tp) => coverage[tp.id] !== "revised");
  const nextTopic = nextIdx === -1 ? null : readyOrdered[nextIdx];
  const inProgress = readyOrdered.find((tp) => coverage[tp.id] === "learning");
  const started = Object.keys(coverage).length > 0;

  const plan = [];
  if (nextTopic) {
    plan.push({
      tid: nextTopic.id,
      txt: (started ? (L === "hi" ? "आगे: " : "Next: ") : (L === "hi" ? "शुरू करें: " : "Begin: ")) + nextTopic.name[L],
      tag: L === "hi" ? "क्रम के अनुसार" : "next in sequence",
    });
  }
  if (inProgress && (!nextTopic || inProgress.id !== nextTopic.id)) {
    plan.push({ tid: inProgress.id, txt: (L === "hi" ? "रिवाइज़ करें: " : "Revise: ") + inProgress.name[L], tag: t("weak", L) });
  }
  if (!nextTopic && !inProgress && readyOrdered[0]) {
    plan.push({ tid: readyOrdered[0].id, txt: L === "hi" ? "रिवीज़न जारी रखें" : "Keep revising", tag: t("standard", L) });
  }

  const days = examDate ? Math.max(0, Math.ceil((new Date(examDate) - new Date()) / 86400000)) : null;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 13, color: C.inkSoft }}>{(L === "hi" ? "नमस्ते" : "Hello") + (name ? ", " + name : "")}</div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>{L === "hi" ? "आज की तैयारी" : "Today's prep"}</div>
        </div>
        <button onClick={onEditDate} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
          {days !== null
            ? <Pill color={C.marigold} text="#3a2706"><b style={{ fontSize: 16 }}>{days}</b>&nbsp;{t("daysLeft", L)}</Pill>
            : <Pill color={C.line} text={C.inkSoft}>{L === "hi" ? "परीक्षा तिथि चुनें" : "Set exam date"}</Pill>}
        </button>
      </div>

      <div style={{ display: "flex", gap: 6, background: "#e9e3d6", borderRadius: 12, padding: 4, marginBottom: 14 }}>
        {[["today", t("planMode", L)], ["journey", t("journey", L)]].map(([m, label]) => (
          <button key={m} onClick={() => setMode(m)}
            style={{ flex: 1, background: mode === m ? C.pine : "transparent", color: mode === m ? C.stone : C.inkSoft,
              border: "none", borderRadius: 9, padding: "9px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Mukta, sans-serif" }}>
            {label}
          </button>
        ))}
      </div>

      {mode === "journey" ? (
        <JourneyView L={L} coverage={coverage} setTopic={setTopic} />
      ) : (
        <>
          <Card title={t("todayPlan", L)} icon={<Sparkles size={16} color={C.marigold} />}>
            {plan.map((it) => (
              <Row key={it.tid} onClick={() => it.tid && setTopic(it.tid)}>
                <div>
                  <div style={{ fontWeight: 600 }}>{it.txt}</div>
                  <div style={{ fontSize: 12, color: C.glacier }}>{t("whyHere", L)}: {it.tag}</div>
                </div>
                <ChevronRight size={18} color={C.inkSoft} />
              </Row>
            ))}
          </Card>

          <Card title={t("todayCA", L)} icon={<Newspaper size={16} color={C.glacier} />}>
            {CURRENT_AFFAIRS.map((ca) => (
              <Row key={ca.id} onClick={() => ca.node && setTopic(ca.node)}>
                <div>
                  <div style={{ fontWeight: 600, lineHeight: 1.3 }}>{ca.title[L]}</div>
                  <span style={{ display: "inline-block", marginTop: 5, fontSize: 11, fontWeight: 600,
                    color: C.pine, background: "#e7efe9", borderRadius: 6, padding: "2px 7px" }}>
                    {t("examAngle", L)}: {ca.angle[L]}
                  </span>
                </div>
                {ca.node && <ChevronRight size={18} color={C.inkSoft} />}
              </Row>
            ))}
          </Card>

          <button onClick={() => setTab("syllabus")} style={btnPrimary}>{t("continue", L)} →</button>
        </>
      )}
    </div>
  );
}

function JourneyView({ L, coverage, setTopic }) {
  const ordered = SYLLABUS_TREE.flatMap((s) => s.topics.filter((tp) => tp.ready).map((tp) => ({ ...tp, subjectName: s.name, icon: s.icon })));
  const isDone = (id) => coverage[id] === "revised";
  const currentIdx = ordered.findIndex((tp) => !isDone(tp.id));
  const doneCount = ordered.filter((tp) => isDone(tp.id)).length;
  const allDone = currentIdx === -1;
  const pct = Math.round((doneCount / ordered.length) * 100);

  const items = [{ kind: "base" }];
  ordered.forEach((tp, i) => {
    let state = "locked";
    if (isDone(tp.id)) state = "done";
    else if (i === currentIdx) state = "current";
    items.push({ kind: "stage", tp, i, state });
  });
  items.push({ kind: "summit", done: allDone });

  return (
    <div>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: 700 }}>{doneCount}/{ordered.length} {t("stagesDone", L)}</span>
          <span style={{ fontSize: 12, color: C.inkSoft }}>{pct}%</span>
        </div>
        <Bar pct={pct} />
        <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 8 }}>{t("journeyHint", L)}</div>
      </Card>

      <div style={{ paddingLeft: 2 }}>
        {items.map((it, idx) => {
          const last = idx === items.length - 1;
          let circle, content, onClick;
          if (it.kind === "base") {
            circle = <Node bg={C.glacier}><MapPin size={14} color="#fff" /></Node>;
            content = <div style={{ fontWeight: 700, color: C.inkSoft, fontSize: 14, paddingTop: 6 }}>{t("baseCamp", L)}</div>;
          } else if (it.kind === "summit") {
            circle = <Node bg={C.marigold} ring={!it.done}><Peak size={18} color="#fff" /></Node>;
            content = (
              <div style={{ paddingTop: 2 }}>
                <div style={{ fontWeight: 800, fontSize: 16 }}>{t("summitGoal", L)}</div>
                <div style={{ fontSize: 13, color: C.inkSoft }}>{t("clearExam", L)}</div>
              </div>
            );
          } else {
            const { tp, state } = it;
            if (state === "done") circle = <Node bg={C.pine}><Check size={16} color="#fff" /></Node>;
            else if (state === "current") circle = <Node bg={C.marigold} ring><b style={{ color: "#fff", fontSize: 14 }}>{it.i + 1}</b></Node>;
            else circle = <Node bg="#ece6da" border><Lock size={13} color={C.inkSoft} /></Node>;
            onClick = state === "locked" ? undefined : () => setTopic(tp.id);
            content = (
              <div style={{ paddingTop: 1 }}>
                <div style={{ fontSize: 11, color: C.inkSoft }}>{tp.icon} {tp.subjectName[L]}</div>
                <div style={{ fontWeight: 700, fontSize: 15.5, color: state === "locked" ? C.inkSoft : C.ink }}>{tp.name[L]}</div>
                <span style={{ fontSize: 11, fontWeight: 700, marginTop: 3, display: "inline-block",
                  color: state === "current" ? "#5a3c00" : state === "done" ? C.pine : C.inkSoft,
                  background: state === "current" ? C.marigoldSoft : state === "done" ? "#e7efe9" : "transparent",
                  borderRadius: 6, padding: state === "locked" ? 0 : "2px 7px" }}>
                  {state === "current" ? t("startHere", L) : state === "done" ? t("revised", L) : `🔒 ${t("lockedTxt", L)}`}
                </span>
              </div>
            );
          }
          return (
            <div key={idx} style={{ display: "flex", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 34 }}>
                {circle}
                {!last && <div style={{ flex: 1, width: 2, background: C.line, minHeight: 18 }} />}
              </div>
              <div onClick={onClick} style={{ flex: 1, paddingBottom: last ? 0 : 18,
                cursor: onClick ? "pointer" : "default" }}>
                {content}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 10, textAlign: "center" }}>
        {L === "hi" ? "सामग्री जुड़ने पर और चरण खुलेंगे।" : "More stages open as content is added."}
      </div>
    </div>
  );
}

function Node({ children, bg, ring, border }) {
  return (
    <div style={{ width: 32, height: 32, borderRadius: 999, background: bg,
      display: "flex", alignItems: "center", justifyContent: "center",
      border: border ? `1.5px solid ${C.line}` : "none",
      boxShadow: ring ? `0 0 0 4px ${C.marigoldSoft}` : "none", flexShrink: 0 }}>
      {children}
    </div>
  );
}

// ---------- Syllabus ----------
function SyllabusTab({ L, coverage, setTopic }) {
  return (
    <div>
      <SectionTitle>{L === "hi" ? "सिलेबस ट्री" : "Syllabus tree"}</SectionTitle>
      <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 12 }}>
        {L === "hi" ? "पूरा आधिकारिक UKPSC सिलेबस। 'योजना में' = सामग्री जुड़नी बाकी है।"
          : "The full official UKPSC syllabus. 'Planned' = content still being added."}
      </div>
      {SYLLABUS_TREE.map((s) => {
        const readyN = s.topics.filter((tp) => tp.ready).length;
        return (
          <div key={s.id} style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700 }}>
                <span style={{ fontSize: 18 }}>{s.icon}</span> {s.name[L]}
              </div>
              <span style={{ fontSize: 11, color: C.inkSoft }}>{readyN}/{s.topics.length}</span>
            </div>
            {s.topics.map((tp) => {
              const st = coverage[tp.id] || "none";
              return (
                <Row key={tp.id} onClick={tp.ready ? () => setTopic(tp.id) : undefined}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontWeight: 600, color: tp.ready ? C.ink : C.inkSoft }}>{tp.name[L]}</span>
                    {tp.highYield >= 3 && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 10, fontWeight: 700,
                        color: "#5a3c00", background: C.marigoldSoft, borderRadius: 5, padding: "1px 6px" }}>
                        <CircleDot size={10} /> {t("highYield", L)}
                      </span>
                    )}
                  </div>
                  {tp.ready ? (
                    <span style={{ fontSize: 11, fontWeight: 600, color: STATUS[st].text,
                      background: STATUS[st].color, borderRadius: 6, padding: "3px 8px" }}>
                      {STATUS[st][L]}
                    </span>
                  ) : (
                    <span style={{ fontSize: 11, fontWeight: 600, color: C.inkSoft,
                      background: "#ece6da", borderRadius: 6, padding: "3px 8px" }}>
                      {L === "hi" ? "योजना में" : "Planned"}
                    </span>
                  )}
                </Row>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

// ---------- Topic detail (notes + connections graph + PYQ) ----------
function TopicDetail({ L, topic, coverage, setCoverage, onBack, onPractice, onAsk }) {
  const st = coverage[topic.id] || "none";
  const [info, setInfo] = useState(null);
  return (
    <div>
      <button onClick={onBack} style={backBtn}><ArrowLeft size={16} /> {UI.back[L]}</button>
      <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "10px 0 2px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{topic.name[L]}</h2>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 12, color: C.inkSoft }}>{topic.subject.name[L]}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700,
          color: "#5a3c00", background: C.marigoldSoft, borderRadius: 6, padding: "2px 8px" }}>
          <CircleDot size={11} /> {topic.highYield} {t("tested", L)}
        </span>
      </div>

      <Card>
        <p style={{ margin: 0, lineHeight: 1.6, fontSize: 15.5 }}>{topic.note[L]}</p>
        {topic.source && (
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 10, paddingTop: 8,
            borderTop: `1px solid ${C.line}`, fontSize: 12, color: C.good, fontWeight: 600 }}>
            <Check size={13} /> {topic.source[L]}
          </div>
        )}
      </Card>

      {/* Connections graph */}
      <Card title={t("connections", L)} icon={<Network size={16} color={C.glacier} />}>
        <ConnGraph L={L} center={topic.name[L]} nodes={topic.graph} onNodeClick={(label) => setInfo(label)} />
        <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 6 }}>
          {L === "hi" ? "घटनाएँ, व्यक्ति, स्थान व विगत प्रश्न आपस में जुड़े हैं।" : "Events, people, places & past questions, linked."}
        </div>
      </Card>

      <Card title={t("pyq", L)} icon={<BookOpen size={16} color={C.pine} />}>
        <p style={{ margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>“{topic.pyq[L]}”</p>
      </Card>

      <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
        <button onClick={() => onPractice(topic.id)} style={{ ...btnPrimary, flex: 1, marginTop: 0 }}>
          {t("practiceTopic", L)}
        </button>
        <button onClick={() => setCoverage({ ...coverage, [topic.id]: "revised" })}
          style={{ flex: 1, background: st === "revised" ? "#e7efe9" : C.card, color: st === "revised" ? C.pine : C.ink,
            border: `1.5px solid ${st === "revised" ? C.pine : C.line}`, borderRadius: 12, padding: "13px",
            fontWeight: 700, cursor: "pointer", fontFamily: "Mukta, sans-serif", fontSize: 15 }}>
          {st === "revised" ? t("revised", L) : t("markRevised", L)}
        </button>
      </div>

      <button onClick={() => onAsk && onAsk({ title: topic.name[L], context: topic.name[L] + " — " + topic.note[L] })}
        style={{ width: "100%", marginTop: 10, background: "#eef3ef", color: C.pine,
          border: `1.5px solid ${C.glacier}`, borderRadius: 12, padding: "12px", fontWeight: 700,
          cursor: "pointer", fontFamily: "Mukta, sans-serif", fontSize: 15, display: "flex",
          alignItems: "center", justifyContent: "center", gap: 7 }}>
        <Sparkles size={16} /> {t("askDoubt", L)}
      </button>

      {info && <NodeDialog L={L} label={info} onClose={() => setInfo(null)} />}
    </div>
  );
}

function ConnGraph({ center, nodes, onNodeClick }) {
  const W = 320, H = 190, cx = W / 2, cy = H / 2;
  const R = 78;
  const pts = nodes.slice(0, 6).map((n, i) => {
    const ang = (Math.PI * 2 * i) / Math.min(nodes.length, 6) - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) * 0.82, label: n };
  });
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }}>
      {pts.map((p, i) => <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke={C.line} strokeWidth="1.5" />)}
      {pts.map((p, i) => (
        <g key={i} onClick={() => onNodeClick && onNodeClick(p.label)} style={{ cursor: "pointer" }}>
          <rect x={p.x - 42} y={p.y - 12} width="84" height="24" rx="12" fill="#eef3ef" stroke={C.glacier} strokeWidth="1.2" />
          <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="9.5" fill={C.pineSoft} fontFamily="Mukta">
            {p.label.length > 13 ? p.label.slice(0, 12) + "…" : p.label}
          </text>
        </g>
      ))}
      <circle cx={cx} cy={cy} r="30" fill={C.pine} />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={C.marigoldSoft} fontFamily="Mukta">
        {center.length > 9 ? center.slice(0, 8) + "…" : center}
      </text>
    </svg>
  );
}

// ---------- Practice ----------
function PracticeTab({ L, setQuiz, onAsk }) {
  return (
    <div>
      <SectionTitle>{t("practice", L)}</SectionTitle>
      <button onClick={() => setQuiz({ mixed: true })} style={{ ...btnPrimary, marginTop: 4 }}>
        {t("startQuiz", L)}
      </button>
      <button onClick={() => onAsk && onAsk({ title: t("aiTutor", L), context: null })}
        style={{ ...cardStyle, width: "100%", textAlign: "left", cursor: "pointer", marginTop: 12,
          display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 7 }}>
            <Sparkles size={16} color={C.marigold} /> {t("askTutorCard", L)}
          </div>
          <div style={{ fontSize: 12, color: C.inkSoft }}>{t("tutorHint", L)}</div>
        </div>
        <ChevronRight size={18} color={C.inkSoft} />
      </button>
      <div style={{ ...cardStyle, opacity: 0.7, marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontWeight: 700 }}>{t("fullMock", L)}</div>
          <div style={{ fontSize: 12, color: C.inkSoft }}>{t("mockSoon", L)}</div>
        </div>
        <Target size={22} color={C.inkSoft} />
      </div>
    </div>
  );
}

function Quiz({ L, quiz, onExit }) {
  const pool = quiz.topicId
    ? topicById(quiz.topicId).mcqs.map((m) => ({ ...m, topic: topicById(quiz.topicId).name }))
    : SUBJECTS.flatMap((s) => s.topics.flatMap((tp) => tp.mcqs.map((m) => ({ ...m, topic: tp.name }))));
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const cur = pool[i];

  if (done) {
    const max = pool.length;
    return (
      <div style={{ textAlign: "center", paddingTop: 30 }}>
        <Peak size={44} color={C.marigold} />
        <div style={{ fontSize: 20, fontWeight: 700, marginTop: 12 }}>{t("score", L)}</div>
        <div style={{ fontSize: 44, fontWeight: 800, color: C.pine }}>{score.toFixed(2)}<span style={{ fontSize: 20, color: C.inkSoft }}>/{(max * 2).toFixed(0)}</span></div>
        <div style={{ fontSize: 12, color: C.inkSoft }}>{t("withNeg", L)}</div>
        <button onClick={onExit} style={{ ...btnPrimary, marginTop: 24 }}>{UI.back[L]}</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={onExit} style={backBtn}><ArrowLeft size={16} /> {UI.back[L]}</button>
      <div style={{ fontSize: 12, color: C.inkSoft, margin: "10px 0 4px" }}>{cur.topic[L]} · {i + 1}/{pool.length}</div>
      <Card>
        <div style={{ fontWeight: 700, fontSize: 16.5, lineHeight: 1.4, marginBottom: 12 }}>{cur.q[L]}</div>
        {cur.opts[L].map((o, idx) => {
          const isAns = idx === cur.a, isPicked = idx === picked;
          let bg = C.card, bd = C.line, col = C.ink;
          if (checked) {
            if (isAns) { bg = "#e7efe9"; bd = C.good; col = C.good; }
            else if (isPicked) { bg = "#fbe9e4"; bd = C.bad; col = C.bad; }
          } else if (isPicked) { bd = C.pine; bg = "#eef3ef"; }
          return (
            <button key={idx} disabled={checked} onClick={() => setPicked(idx)}
              style={{ width: "100%", textAlign: "left", background: bg, border: `1.5px solid ${bd}`, color: col,
                borderRadius: 12, padding: "12px 14px", marginBottom: 8, fontSize: 15, fontWeight: 600,
                cursor: checked ? "default" : "pointer", fontFamily: "Mukta, sans-serif", display: "flex",
                justifyContent: "space-between", alignItems: "center" }}>
              {o}
              {checked && isAns && <Check size={18} />}
              {checked && isPicked && !isAns && <X size={18} />}
            </button>
          );
        })}
        {checked && (
          <div style={{ background: "#f4f1e8", borderRadius: 10, padding: "10px 12px", fontSize: 14, marginTop: 4 }}>
            <b style={{ color: picked === cur.a ? C.good : C.bad }}>{picked === cur.a ? t("correct", L) : t("wrong", L)}.</b>{" "}
            {cur.ex[L]}
          </div>
        )}
      </Card>
      {!checked ? (
        <button disabled={picked === null} onClick={() => { setChecked(true); setScore((s) => s + (picked === cur.a ? 2 : -0.66)); }}
          style={{ ...btnPrimary, opacity: picked === null ? 0.5 : 1 }}>{t("submit", L)}</button>
      ) : (
        <button onClick={() => { if (i + 1 >= pool.length) setDone(true); else { setI(i + 1); setPicked(null); setChecked(false); } }}
          style={btnPrimary}>{t("next", L)} →</button>
      )}
    </div>
  );
}

// ---------- Progress ----------
function ProgressTab({ L, coverage }) {
  const readyTopics = SYLLABUS_TREE.flatMap((s) => s.topics.filter((tp) => tp.ready));
  const totalTopics = SYLLABUS_TREE.flatMap((s) => s.topics).length;
  const doneCount = readyTopics.filter((tp) => coverage[tp.id] === "revised").length;
  const pct = Math.round((doneCount / readyTopics.length) * 100);
  return (
    <div>
      <SectionTitle>{t("coverage", L)}</SectionTitle>
      <Card>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 40, fontWeight: 800, color: C.pine, lineHeight: 1 }}>{pct}%</div>
            <div style={{ fontSize: 12, color: C.inkSoft }}>{doneCount}/{readyTopics.length} {t("done", L)}</div>
            <div style={{ fontSize: 11, color: C.inkSoft, marginTop: 2 }}>
              {L === "hi" ? `${totalTopics} में से ${readyTopics.length} विषयों में सामग्री` : `${readyTopics.length} of ${totalTopics} topics have content`}
            </div>
          </div>
          <span />
        </div>
        <Bar pct={pct} />
      </Card>

      <Card title={t("byNode", L)}>
        {SYLLABUS_TREE.filter((s) => s.topics.some((tp) => tp.ready)).map((s) => {
          const ready = s.topics.filter((tp) => tp.ready);
          const d = ready.filter((tp) => coverage[tp.id] === "revised").length;
          const p = Math.round((d / ready.length) * 100);
          return (
            <div key={s.id} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
                <span>{s.icon} {s.name[L]}</span><span style={{ color: C.inkSoft }}>{p}%</span>
              </div>
              <Bar pct={p} />
            </div>
          );
        })}
      </Card>

      <Card title={t("weak", L)} icon={<Target size={16} color={C.bad} />}>
        <div style={{ fontSize: 14, color: C.inkSoft, lineHeight: 1.5 }}>
          {L === "hi" ? "व्यक्तिगत परत आपकी गलतियों को पकड़ती है — मानक योजना सबके लिए समान रहती है, पर रिवीज़न आपके अनुसार।"
            : "The personalized layer tracks your errors — the standard plan stays the same for everyone, but revision adapts to you."}
        </div>
      </Card>
    </div>
  );
}

function AITutor({ L, context, title, onExit }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async (text) => {
    const q = (typeof text === "string" ? text : input).trim();
    if (!q || loading) return;
    const next = [...messages, { role: "user", content: q }];
    setMessages(next); setInput(""); setLoading(true);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang: L, context, messages: next.map((m) => ({ role: m.role, content: m.content })) }),
      });
      const data = await res.json();
      const txt = (data.text || "").trim();
      const reply = txt || data.error || (L === "hi" ? "उत्तर नहीं मिला।" : "No answer came back.");
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages([...next, { role: "assistant", content: L === "hi" ? "नेटवर्क त्रुटि — पुनः प्रयास करें।" : "Network error — please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const starters = context
    ? [L === "hi" ? "इसे 3 बिंदुओं में समझाएँ" : "Explain this in 3 points",
       L === "hi" ? "इससे परीक्षा में कैसे प्रश्न आते हैं?" : "How is this asked in the exam?"]
    : [L === "hi" ? "गुप्त काल को स्वर्ण युग क्यों कहते हैं?" : "Why is the Gupta age called the golden age?",
       L === "hi" ? "कत्यूरी व चंद राजवंश में अंतर बताएँ" : "Compare the Katyuri and Chand dynasties"];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <button onClick={onExit} style={backBtn}><ArrowLeft size={16} /> {UI.back[L]}</button>
      <div style={{ display: "flex", alignItems: "center", gap: 7, margin: "10px 0 2px" }}>
        <Sparkles size={20} color={C.marigold} />
        <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{title || t("aiTutor", L)}</h2>
      </div>
      <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 12 }}>{t("tutorHint", L)}</div>

      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 10, minHeight: 120 }}>
        {messages.length === 0 && starters.map((s, i) => (
          <button key={i} onClick={() => ask(s)}
            style={{ display: "block", width: "100%", textAlign: "left", background: C.card,
              border: `1px solid ${C.line}`, borderRadius: 12, padding: "12px 14px",
              fontSize: 14, fontWeight: 600, color: C.pine, cursor: "pointer", fontFamily: "Mukta, sans-serif" }}>
            {s}
          </button>
        ))}
        {messages.map((m, i) => (
          <div key={i} style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "86%",
            background: m.role === "user" ? C.pine : C.card, color: m.role === "user" ? C.stone : C.ink,
            border: m.role === "user" ? "none" : `1px solid ${C.line}`, borderRadius: 14, padding: "10px 13px",
            fontSize: 14.5, lineHeight: 1.5, whiteSpace: "pre-wrap" }}>
            {m.content}
          </div>
        ))}
        {loading && <div style={{ alignSelf: "flex-start", color: C.inkSoft, fontSize: 13 }}>{t("thinking", L)}</div>}
      </div>

      <div style={{ display: "flex", gap: 8, paddingTop: 10 }}>
        <input value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") ask(); }}
          placeholder={t("askPlaceholder", L)}
          style={{ flex: 1, border: `1.5px solid ${C.line}`, borderRadius: 12, padding: "12px 14px",
            fontSize: 15, fontFamily: "Mukta, sans-serif", outline: "none", background: C.card }} />
        <button onClick={() => ask()} disabled={loading}
          style={{ background: loading ? C.pineSoft : C.pine, color: C.stone, border: "none", borderRadius: 12,
            padding: "0 16px", fontWeight: 700, cursor: loading ? "default" : "pointer", fontFamily: "Mukta, sans-serif", fontSize: 15 }}>
          {t("send", L)}
        </button>
      </div>
    </div>
  );
}

// ---------- small UI helpers ----------
const cardStyle = { background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: 14, marginBottom: 12 };
const btnPrimary = { width: "100%", background: C.pine, color: C.stone, border: "none", borderRadius: 14,
  padding: "14px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "Mukta, sans-serif", marginTop: 12 };
const backBtn = { display: "inline-flex", alignItems: "center", gap: 5, background: "none", border: "none",
  color: C.glacier, fontWeight: 600, cursor: "pointer", fontSize: 14, fontFamily: "Mukta, sans-serif", padding: 0 };

function Card({ title, icon, children }) {
  return (
    <div style={cardStyle}>
      {title && (
        <div style={{ display: "flex", alignItems: "center", gap: 7, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>
          {icon}{title}
        </div>
      )}
      {children}
    </div>
  );
}
function Row({ children, onClick }) {
  return (
    <div onClick={onClick} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "10px 0", borderTop: `1px solid ${C.line}`, cursor: onClick ? "pointer" : "default", gap: 10 }}>
      {children}
    </div>
  );
}
function SectionTitle({ children }) {
  return <h2 style={{ fontSize: 20, fontWeight: 800, margin: "2px 0 8px" }}>{children}</h2>;
}
function Pill({ children, color, text }) {
  return <span style={{ display: "inline-flex", alignItems: "center", background: color, color: text,
    borderRadius: 999, padding: "5px 11px", fontSize: 12, fontWeight: 600 }}>{children}</span>;
}
function Bar({ pct }) {
  return (
    <div style={{ height: 8, background: C.line, borderRadius: 99, marginTop: 8, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: C.pine, borderRadius: 99 }} />
    </div>
  );
}
function Peak({ size = 30, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: "inline-block" }}>
      <path d="M2 20 L9 7 L13 14 L16 9 L22 20 Z" fill={color} />
      <path d="M9 7 L11 10 L7.5 10 Z" fill="#fff" opacity="0.85" />
    </svg>
  );
}
function Contour({ faint }) {
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: faint ? 0.08 : 0.13 }}
      preserveAspectRatio="none" viewBox="0 0 400 160">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M0 ${30 + i * 22} Q 100 ${10 + i * 22} 200 ${30 + i * 22} T 400 ${30 + i * 22}`}
          fill="none" stroke="#fff" strokeWidth="1.2" />
      ))}
    </svg>
  );
}
function NodeDialog({ L, label, onClose }) {
  const info = ENTITY_INFO[label];
  return (
    <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(20,30,24,0.45)",
      display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 50 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: C.card, width: "100%", maxWidth: 440,
        borderRadius: "20px 20px 0 0", padding: "20px 18px 26px" }}>
        <div style={{ width: 38, height: 4, background: C.line, borderRadius: 9, margin: "0 auto 14px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
          <Network size={17} color={C.glacier} />
          <span style={{ fontWeight: 800, fontSize: 18 }}>{label}</span>
        </div>
        <p style={{ margin: 0, lineHeight: 1.55, fontSize: 15, color: C.ink }}>
          {info ? info[L] : (L === "hi" ? "इस विषय से जुड़ा संबंधित बिंदु।" : "A linked point related to this topic.")}
        </p>
        <button onClick={onClose} style={{ ...btnPrimary, marginTop: 18 }}>
          {L === "hi" ? "बंद करें" : "Close"}
        </button>
      </div>
    </div>
  );
}
function Style() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700;800&display=swap');
      * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
      body { margin: 0; }
      ::-webkit-scrollbar { width: 0; }
      button:focus-visible { outline: 2px solid ${C.marigold}; outline-offset: 2px; }
    `}</style>
  );
}
