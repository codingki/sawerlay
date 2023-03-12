export const ANIMATION = {
  wiggle: `.container {
  animation: wiggle 0.1s ease-in-out alternate;
  animation-iteration-count: 8;
}

@keyframes wiggle {
  from {
    transform: rotatez(4deg);
  }
  to {
    transform: rotatez(-4deg);
  }
}`,
  fade: `.container {
  animation: fade 1s ease 0s 1 normal forwards;
}

@keyframes fade {
	0% {
		opacity: 0;
	}
  100% {
		opacity: 1;
	}
}`,
  "scale-forward-center": `.container {
  animation: scale-forward-center 1s ease-in-out alternate;
}

@keyframes scale-forward-center {
	0% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
}
`,
  "scale-forward-top": `.container {
animation: scale-forward-top 1s ease 0s 1 normal forwards;
  }

  @keyframes scale-forward-top {
	0% {
		transform: scale(0);
		transform-origin: 50% 0%;
	}

	100% {
		transform: scale(1);
		transform-origin: 50% 0%;
	}
}
  `,
  "swirl-forward-center": `.container {
    animation: swirl-forward-center 1s ease 0s 1 normal forwards;
  }
  @keyframes swirl-forward-center {
	0% {
		opacity: 0;
		transform: rotate(-540deg) scale(0);
	}

	100% {
		opacity: 1;
		transform: rotate(0) scale(1);
	}
}
  `,
};

export type Animations = keyof typeof ANIMATION;
