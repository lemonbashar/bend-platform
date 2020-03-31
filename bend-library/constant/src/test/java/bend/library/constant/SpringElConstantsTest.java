package bend.library.constant;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
class SpringElConstantsTest {

    @Test
    void elc() {
        System.out.println(SpringElConstants.SPEL_PREFIX);
    }
}