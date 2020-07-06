package bend.library.domain;

import bend.library.domain.entity.BaseEntity;
import lombok.RequiredArgsConstructor;

import java.math.BigInteger;

@RequiredArgsConstructor
public abstract class AbstractBaseService<Entity extends BaseEntity<BigInteger>> extends BaseService implements IBaseService<Entity> {
}
