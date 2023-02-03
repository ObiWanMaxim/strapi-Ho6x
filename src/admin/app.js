import PreviewButton from "./extensions/components/PreviewButton";
import TweetButton from "./extensions/components/TweetButton";
import DraftFilterButton from './extensions/components/DraftFilterButton';
import PublicationWorkflow from './extensions/components/PublicationWorkflow';

export default {
  config: {
    locales: ["he"],
    tutorials: false,
    translations: {
      he: {
        "components.DraftFilterButton.show-drafts": "הצג טיוטות",
        "components.DraftFilterButton.hide-drafts": "הסתר טיוטות",
        "components.PreviewButton.button": "תצוגה מקדימה",
        "components.TweetButton.button": "שתף בטוויטר",
      },
      en: {
        "components.DraftFilterButton.show-drafts": "Show drafts",
        "components.DraftFilterButton.hide-drafts": "Hide drafts",
        "components.PreviewButton.button": "Preview",
        "components.TweetButton.button": "Share on Twitter",
      },
    },
  },
  bootstrap(app) {
    app.injectContentManagerComponent("listView", "actions", {
      name: "DraftFilterButton",
      Component: DraftFilterButton,
    });
    app.injectContentManagerComponent("editView", "right-links", {
      name: "PublicationWorkflow",
      Component: PublicationWorkflow,
    });
    app.injectContentManagerComponent("editView", "right-links", {
      name: "PreviewButton",
      Component: PreviewButton,
    });
    app.injectContentManagerComponent("editView", "right-links", {
      name: "TweetButton",
      Component: TweetButton,
    });
  },
};
