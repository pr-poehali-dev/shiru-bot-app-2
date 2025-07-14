import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const games = [
    {
      id: 'knb',
      title: 'КНБ',
      subtitle: 'Камень, Ножницы, Бумага',
      icon: 'Scissors',
      color: 'bg-blue-500',
      progress: 0,
      games: 1247,
      rating: 342
    },
    {
      id: 'casino',
      title: 'Казино',
      subtitle: 'Рулетка и слоты',
      icon: 'Coins',
      color: 'bg-red-500',
      progress: 0,
      games: 856,
      rating: 128
    },
    {
      id: 'emoji-puzzle',
      title: 'Эмодзи-пазл',
      subtitle: 'Собери картинку',
      icon: 'Puzzle',
      color: 'bg-green-500',
      progress: 0,
      games: 623,
      rating: 95
    },
    {
      id: 'lottery',
      title: 'Розыгрыш',
      subtitle: 'Испытай удачу',
      icon: 'Gift',
      color: 'bg-orange-500',
      progress: 0,
      games: 2100,
      rating: 567
    },
    {
      id: 'hundred-to-one',
      title: 'Сто к одному',
      subtitle: 'Угадай популярный ответ',
      icon: 'Target',
      color: 'bg-purple-500',
      progress: 0,
      games: 445,
      rating: 89
    }
  ];

  const stats = {
    points: 1247,
    level: 15,
    rating: 342
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">
            <span className="text-foreground">SHIRU</span>
            <span className="text-primary ml-1">BOT</span>
          </h1>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Icon name="RotateCcw" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Settings" size={20} />
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">Общий прогресс</span>
          <span className="text-sm font-medium">
            <span className="text-destructive">{stats.points}</span>
            <span className="text-muted-foreground ml-1">очков</span>
          </span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="bg-card border-border">
            <CardContent className="p-3 text-center">
              <div className="text-lg font-bold text-primary">{stats.points.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Очки</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-3 text-center">
              <div className="text-lg font-bold text-yellow-400">{stats.level}</div>
              <div className="text-xs text-muted-foreground">Уровень</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-3 text-center">
              <div className="text-lg font-bold text-secondary">#{stats.rating}</div>
              <div className="text-xs text-muted-foreground">Рейтинг</div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-lg font-semibold mb-4 text-muted-foreground">Выбери игру</h2>
      </div>

      {/* Games */}
      <div className="px-4 space-y-3">
        {games.map((game) => (
          <Card key={game.id} className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl ${game.color} flex items-center justify-center`}>
                    <Icon name={game.icon as any} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{game.title}</h3>
                    <p className="text-sm text-muted-foreground">{game.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Игрок</div>
                    <div className="font-medium text-primary">{game.games.toLocaleString()}</div>
                  </div>
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">{game.progress}%</span>
                  <Icon name="Trophy" size={16} className="text-muted-foreground" />
                </div>
                <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">
                  {game.rating}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom spacing */}
      <div className="h-6"></div>
    </div>
  );
}