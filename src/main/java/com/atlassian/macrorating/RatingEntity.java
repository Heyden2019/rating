package com.atlassian.macrorating;

import net.java.ao.Entity;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
// todo тут один класс используется и для хранения в базе и для отдачи на клиент, тем самым нарушая https://en.wikipedia.org/wiki/Single-responsibility_principle
public interface RatingEntity extends Entity {
    @XmlElement
    int getPageId();
    void setPageId(int pageId);

    @XmlElement
    String getUserKey();
    void setUserKey(String userKey);

    @XmlElement
    int getRating();
    void setRating(int rating);
}