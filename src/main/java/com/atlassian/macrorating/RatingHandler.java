package com.atlassian.macrorating;


import com.atlassian.activeobjects.external.ActiveObjects;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import org.springframework.beans.factory.annotation.Autowired;

import javax.inject.Named;

import static com.google.common.base.Preconditions.checkNotNull;

@Named
public class RatingHandler {

    private ActiveObjects ao;

    @Autowired
    public RatingHandler(@ComponentImport ActiveObjects ao) {
        this.ao = checkNotNull(ao);
    }

    public boolean hasRatingCreated(int pageId, String userKey, int rating) {
        if (rating < 1 || rating > 5) {
            return false;
        } else {
            RatingEntity pageRating = ao.create(RatingEntity.class);
            pageRating.setPageId(pageId);
            pageRating.setUserKey(userKey);
            pageRating.setRating(rating);
            pageRating.save();
            return true;
        }
    }

    public boolean hasRatingUpdated(int pageId, String userKey, int rating) {
        if (rating < 1 || rating > 5) {
            return false;
        } else {
            RatingEntity pageRating = ao.find(RatingEntity.class, "PAGE_ID = ? AND USER_KEY = ?", pageId, userKey)[0];
            pageRating.setRating(rating);
            pageRating.save();
            return true;
        }
    }

    public RatingEntity[] findByPageId(int pageId) {
        return ao.find(RatingEntity.class, "PAGE_ID = ?", pageId);
    }
}
