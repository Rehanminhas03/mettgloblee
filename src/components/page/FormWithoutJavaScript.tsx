/** A direct contact route when the enhanced form cannot run. */
export function FormWithoutJavaScript() {
  return (
    <noscript>
      <style>{'[data-js-form] { display: none !important; }'}</style>
      <p className="mx-auto max-w-[760px] rounded-2xl border border-current p-6 text-base leading-relaxed">
        The enquiry and meeting forms need JavaScript. You can also email{' '}
        <a href="mailto:contact@mettglobal.com" className="underline">
          contact@mettglobal.com
        </a>{' '}
        with your project details or preferred meeting time.
      </p>
    </noscript>
  );
}
