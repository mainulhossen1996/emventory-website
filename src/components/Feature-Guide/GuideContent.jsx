import { FiInfo } from "react-icons/fi";

export function GuideContent({ docData }) {
  return (
    <article className="max-w-3xl mx-auto px-8 sm:px-12 py-10 text-slate-800">
      {/* Title block */}
      <div className="border-b border-slate-200 pb-6 mb-8">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight leading-none mb-3">
          {docData.title}
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-normal">
          {docData.subtitle}
        </p>
      </div>

      {/* Conceptual explanation paragraph */}
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-sm leading-relaxed text-slate-600">
          {docData.description}
        </p>
      </div>

      {/* Structured execution sequence steps */}
      <div className="space-y-5 mb-8">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          Operational Implementation Walkthrough
        </h3>
        <div className="border border-slate-200 rounded-lg divide-y divide-slate-100 bg-white">
          {docData.steps.map((step, index) => (
            <div key={index} className="p-4 flex gap-3 items-start">
              <div className="mt-0.5 h-4 w-4 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-mono font-bold text-slate-600 shrink-0">
                {index + 1}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pro tip structural blockquote */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex gap-3">
        <FiInfo size={16} className="text-slate-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wide block">
            Architectural Notice
          </span>
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            {docData.proTip}
          </p>
        </div>
      </div>
    </article>
  );
}

export default GuideContent;