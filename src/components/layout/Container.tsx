export default function Container({
      children,
}: {
      children: React.ReactNode;
}) {
      // Note: break-all?
      return (
            <div className="relative max-w-xl ml-8 mt-3 text-2xl leading-relaxed break-all">
                  {children}
            </div>
      );
}