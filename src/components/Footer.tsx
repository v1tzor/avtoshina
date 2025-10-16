export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-800/50 py-8">
      <div className="container mx-auto px-4">
          <div className="flex flex-row md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-xl">Автошина</p>
                <p className="text-sm text-slate-400">© 2025 Все права защищены</p>
              </div>
            </div>
            <div className="text-right md:text-right">
              <p className="text-sm text-slate-400 md:text-base">Профессиональный сервис шин и дисков</p>
              <p className="text-sm text-slate-400 md:text-base">г. Россошь, Воронежская область</p>
            </div>
          </div>
        </div>
    </footer>
  );
}
