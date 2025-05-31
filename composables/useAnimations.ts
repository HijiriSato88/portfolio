// アニメーション設定のcomposable
interface AnimationTransition {
  duration: number;
  delay?: number;
  ease: string;
}

interface AnimationConfig {
  initial: {
    opacity: number;
    x?: number;
    y?: number;
  };
  visibleOnce: {
    opacity: number;
    x?: number;
    y?: number;
    transition: AnimationTransition;
  };
}

type AnimationDirection = 'left' | 'right' | 'bottom';

export const useAnimations = () => {
  // セクションタイトル用のアニメーション
  const sectionTitleAnimation: AnimationConfig = {
    initial: { opacity: 0, y: 40 },
    visibleOnce: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1000, ease: 'easeOutQuart' } 
    }
  }

  // カード/アイテム用のアニメーション（下からスライドイン）
  const slideUpAnimation = (delay: number = 0): AnimationConfig => ({
    initial: { opacity: 0, y: 50 },
    visibleOnce: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 800, 
        delay, 
        ease: 'easeOutQuart' 
      } 
    }
  })

  // 左右交互のスライドイン（タイムライン用）
  const alternateSlideAnimation = (index: number, baseDelay: number = 200): AnimationConfig => ({
    initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visibleOnce: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 800, 
        delay: baseDelay + (index * 200), 
        ease: 'easeOutQuart' 
      } 
    }
  })

  // 方向指定スライドイン
  const slideFromSideAnimation = (
    direction: AnimationDirection = 'left', 
    delay: number = 300
  ): AnimationConfig => {
    const getInitialPosition = () => {
      switch(direction) {
        case 'left': return { x: -50, y: 0 };
        case 'right': return { x: 50, y: 0 };
        case 'bottom': return { x: 0, y: 50 };
        default: return { x: -50, y: 0 };
      }
    }

    return {
      initial: { opacity: 0, ...getInitialPosition() },
      visibleOnce: { 
        opacity: 1, 
        x: 0, 
        y: 0,
        transition: { 
          duration: 1200, 
          delay, 
          ease: 'easeOutQuart' 
        } 
      }
    }
  }

  return {
    sectionTitleAnimation,
    slideUpAnimation,
    alternateSlideAnimation,
    slideFromSideAnimation
  }
}

// 型エクスポート（他のファイルで使用可能）
export type { AnimationConfig, AnimationDirection } 