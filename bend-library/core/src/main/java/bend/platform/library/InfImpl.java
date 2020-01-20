package bend.platform.library;

import org.springframework.stereotype.Service;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/21/2020
 */

@Service
public class InfImpl implements Inf {
    @Override
    public void say() {
        System.out.println("Good Night");
    }
}
